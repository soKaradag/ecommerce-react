import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function OrderHistoryPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-3xl font-bold text-gray-800">Sipariş Geçmişi</h1>
      </div>
      <p className="text-gray-600">Geçmiş siparişlerinizi burada görüntüleyebilirsiniz.</p>
      {/* Sipariş geçmişi içeriği buraya gelecek */}
    </div>
  );
}
