import { Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  fetchProductImagesByProductId,
  uploadProductImage,
} from "../../api/product/productApi";
import { addToCart } from "../../api/cart/addToCart";

interface ProductCardProps {
  id: string;
  title: string;
  category: string;
  price: number;
}

export default function ProductCard({ id, title, category, price }: ProductCardProps) {
  const [imageUrl, setImageUrl] = useState<string>("/default_product.png");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isAdminUser, setIsAdminUser] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false); // <-- toggle için

  useEffect(() => {
    const loadImage = async () => {
      try {
        const images = await fetchProductImagesByProductId(id);
        if (images.length > 0) {
          setImageUrl(images[0].imageUrl);
        }
      } catch (error) {
        console.error("Ürün görseli yüklenemedi:", error);
      }
    };

    const checkAdminRole = () => {
      const token = localStorage.getItem("token");
      if (token) {
        const payload = JSON.parse(atob(token.split(".")[1]));
        if (payload.role === "ADMIN") {
          setIsAdminUser(true);
        }
      }
    };

    loadImage();
    checkAdminRole();
  }, [id]);

  const handleImageClick = () => {
    if (isAdminUser && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const response = await uploadProductImage(file, id);
      setImageUrl(response.imageUrl);
    } catch (error) {
      console.error("Görsel yüklenemedi:", error);
    }
  };

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Giriş yapmalısınız.");
        return;
      }

      const payload = JSON.parse(atob(token.split(".")[1]));
      const userId = payload.userId;
      const role = payload.role;

      if (role !== "CUSTOMER") {
        alert("Sadece müşteri rolündeki kullanıcılar sepete ürün ekleyebilir.");
        return;
      }

      await addToCart(userId, id);
      alert("Ürün sepete eklendi.");
    } catch (error) {
      console.error("Sepete eklenirken hata oluştu:", error);
      alert("Sepete eklenemedi.");
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(prev => !prev);
  };

  return (
    <div className="relative bg-white p-4 rounded-xl hover:shadow-md transition border border-gray-200 hover:border-blue-200">
      {/* Favori İkonu */}
      <button
        onClick={toggleFavorite}
        className={`absolute top-3 right-3 p-1 rounded-xl bg-white border ${
          isFavorite ? "text-red-500 border-red-500" : "text-gray-400 border-gray-300"
        }`}
      >
        <Heart className="w-5 h-5" fill={isFavorite ? "red" : "none"} />
      </button>

      {/* Ürün Görseli */}
      <div
        className={`h-40 bg-gray-200 rounded mb-4 overflow-hidden cursor-pointer ${
          isAdminUser ? "hover:opacity-80" : ""
        }`}
        onClick={isAdminUser ? handleImageClick : undefined}
        title={isAdminUser ? "Yeni görsel yüklemek için tıkla" : ""}
      >
        <img
          src={`http://localhost:8080${imageUrl}`}
          alt={title}
          className="w-full h-full object-cover rounded"
        />
      </div>

      {isAdminUser && (
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      )}

      <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">Kategori: {category}</p>
      <p className="text-blue-500 font-bold mb-3">₺{price.toFixed(2)}</p>

      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-500 text-white py-2 rounded-xl text-sm hover:bg-blue-600 transition"
      >
        Sepete Ekle
      </button>
    </div>
  );
}
