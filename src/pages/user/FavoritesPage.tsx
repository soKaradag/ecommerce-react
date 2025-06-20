import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function FavoritesPage() {
  const navigate = useNavigate();

  return (
    <div className=" mx-12 px-4 py-10">
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate("/profile")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-3xl font-bold text-gray-800">Favorilerim</h1>
      </div>
      <p className="text-gray-600">Favorilere eklediğiniz ürünler burada listelenecek.</p>
      {/* Ürün kartları burada listelenebilir */}
    </div>
  );
}
