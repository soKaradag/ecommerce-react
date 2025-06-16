import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function UserManagement() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={() => navigate("/admin")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-3xl font-bold text-gray-800">Kullanıcı Yönetimi</h1>
      </div>
      <p className="text-gray-600 mb-8">Kullanıcı bilgilerini görüntüleme ve düzenleme.</p>
      {/* Kullanıcı yönetimi içeriği buraya gelecek */}
    </div>
  );
}
