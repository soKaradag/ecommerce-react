// components/cards/ProductCard.tsx
import { Heart } from "lucide-react";

interface ProductCardProps {
  title: string;
  category: string;
  price: number;
}

export default function ProductCard({ title, category, price }: ProductCardProps) {
  return (
    <div className="relative bg-white p-4 rounded-xl hover:shadow-md transition border border-gray-200 hover:border-blue-200">
      {/* Favori İkonu */}
      <button className="absolute top-3 right-3 p-1 rounded-xl bg-white text-gray-400 hover:text-red-500 border-1 border-gray-300">
        <Heart className="w-5 h-5" />
      </button>

      {/* Ürün Görseli */}
      <div className="h-40 bg-gray-200 rounded mb-4" />

      <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">Kategori: {category}</p>
      <p className="text-blue-500 font-bold mb-3">₺{price.toFixed(2)}</p>

      {/* Sepete Ekle */}
      <button className="w-full bg-blue-500 text-white py-2 rounded-xl text-sm hover:bg-blue-600 transition">
        Sepete Ekle
      </button>
    </div>
  );
}
