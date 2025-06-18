import { Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { fetchProductImagesByProductId, uploadProductImage } from "../../api/product/productApi";

interface ProductCardProps {
  id: string;
  title: string;
  category: string;
  price: number;
  isAdmin?: boolean; // admin kontrolü
}

export default function ProductCard({ id, title, category, price, isAdmin = false }: ProductCardProps) {
  const [imageUrl, setImageUrl] = useState<string>("/default_product.png");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const images = await fetchProductImagesByProductId(id);
        if (images.length > 0) {
          console.log("Yüklenen resim URL'si:", images[0].imageUrl); // <== BURAYA BAK
          setImageUrl(images[0].imageUrl);
        }
      } catch (error) {
        console.error("Ürün görseli yüklenemedi:", error);
      }
    };

    loadImage();
  }, [id]);


  const handleImageClick = () => {
    if (isAdmin && fileInputRef.current) {
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

  return (
    <div className="relative bg-white p-4 rounded-xl hover:shadow-md transition border border-gray-200 hover:border-blue-200">
      {/* Favori İkonu */}
      <button className="absolute top-3 right-3 p-1 rounded-xl bg-white text-gray-400 hover:text-red-500 border border-gray-300">
        <Heart className="w-5 h-5" />
      </button>

      {/* Ürün Görseli */}
      <div
        className={`h-40 bg-gray-200 rounded mb-4 overflow-hidden cursor-pointer ${
          isAdmin ? "hover:opacity-80" : ""
        }`}
        onClick={handleImageClick}
        title={isAdmin ? "Yeni görsel yüklemek için tıkla" : ""}
      >
        <img src={`http://localhost:8080${imageUrl}`} alt={title} className="w-full h-full object-cover rounded" />
      </div>

      {/* Görsel yükleme inputu (gizli) */}
      {isAdmin && (
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

      <button className="w-full bg-blue-500 text-white py-2 rounded-xl text-sm hover:bg-blue-600 transition">
        Sepete Ekle
      </button>
    </div>
  );
}
