import { useEffect, useState } from "react";
import { getCartByUser } from "../../api/cart/getCartByUser";
import {
  fetchProductById,
  fetchProductImagesByProductId,
} from "../../api/product/productApi";
import type { CartItemResponse } from "../../types/dto/cart";
import type { ProductResponse } from "../../types/dto/product";
import PlaceOrderButton from "../../components/buttons/PlaceOrderButton";

interface EnrichedCartItem extends CartItemResponse {
  productName?: string;
  productImageUrl?: string;
  productPrice?: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<EnrichedCartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Lütfen giriş yapınız.");
      return;
    }

    const payload = JSON.parse(atob(token.split(".")[1]));
    const role = payload.role;
    const userId = payload.userId;

    if (role !== "CUSTOMER") {
      alert("Sepet yalnızca müşteri kullanıcıları içindir.");
      return;
    }

    const fetchCartWithDetails = async () => {
      try {
        const cart = await getCartByUser(userId);

        const enrichedItems = await Promise.all(
          cart.items.map(async (item) => {
            let productName = "Ürün adı alınamadı";
            let productImageUrl = "/default_product.png";
            let productPrice = 0;

            try {
              const product: ProductResponse = await fetchProductById(item.productId);
              productName = product.name;
              productPrice = product.price;

              const images = await fetchProductImagesByProductId(item.productId);
              if (images.length > 0) {
                productImageUrl = `http://localhost:8080${images[0].imageUrl}`;
              }
            } catch (error) {
              console.warn("Ürün bilgisi alınırken hata:", error);
            }

            return {
              ...item,
              productName,
              productImageUrl,
              productPrice,
            };
          })
        );

        setCartItems(enrichedItems);

        const totalPrice = enrichedItems.reduce(
          (sum, item) => sum + (item.productPrice || 0) * item.quantity,
          0
        );
        setTotal(totalPrice);
      } catch (error) {
        console.error("Sepet yüklenemedi:", error);
        alert("Sepet alınamadı.");
      } finally {
        setLoading(false);
      }
    };

    fetchCartWithDetails();
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Sepet</h1>
      <p className="text-gray-600 mb-8">
        Sepetinizdeki ürünleri görüntüleyin ve satın alma işlemini tamamlayın.
      </p>

      {loading ? (
        <p>Yükleniyor...</p>
      ) : cartItems.length === 0 ? (
        <p>Sepetinizde ürün bulunmamaktadır.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Ürünler */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 p-4 rounded-xl shadow-sm"
              >
                <img
                  src={item.productImageUrl}
                  alt={item.productName}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <h3 className="font-semibold text-gray-800">
                  {item.productName}
                </h3>
                <p className="text-gray-600 text-sm">
                  Adet: {item.quantity}
                </p>
                <p className="text-blue-500 font-semibold mt-1">
                  ₺{(item.productPrice || 0).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Sağdaki toplam ve satın al */}
          <div className="border border-gray-200 p-6 rounded-xl shadow-sm h-fit sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Sipariş Özeti</h2>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Toplam Ürün</span>
              <span>{cartItems.reduce((sum, i) => sum + i.quantity, 0)} adet</span>
            </div>
            <div className="flex justify-between text-lg font-semibold text-gray-900 mt-2 mb-6">
              <span>Toplam Tutar</span>
              <span>₺{total.toFixed(2)}</span>
            </div>
            <PlaceOrderButton />
          </div>
        </div>
      )}
    </div>
  );
}
