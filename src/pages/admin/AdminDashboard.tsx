import { Link } from "react-router-dom";
import { FileText, PackageSearch, ShoppingCart, Users } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin Paneli</h1>
      <p className="text-gray-600 mb-8">Sipariş yönetimi, ürün ekleme ve daha fazlası.</p>
      {/* Yönetim panelleri */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Ürün Yönetimi */}
        <Link
          to="/admin/products"
          className="bg-gray-100 p-6 rounded-xl shadow hover:bg-gray-200 transition flex flex-col items-center text-center"
        >
          <PackageSearch className="w-10 h-10 text-blue-600 mb-4" />
          <h2 className="text-lg font-semibold text-gray-800">Ürün Yönetimi</h2>
          <p className="text-gray-600 text-sm">Ürün ekleme, düzenleme ve silme işlemleri.</p>
        </Link>

        {/* Siparişler */}
        <Link
          to="/admin/orders"
          className="bg-gray-100 p-6 rounded-xl shadow hover:bg-gray-200 transition flex flex-col items-center text-center"
        >
          <ShoppingCart className="w-10 h-10 text-green-600 mb-4" />
          <h2 className="text-lg font-semibold text-gray-800">Siparişler</h2>
          <p className="text-gray-600 text-sm">Sipariş takibi ve yönetimi.</p>
        </Link>

        {/* Kullanıcı Yönetimi */}
        <Link
          to="/admin/users"
          className="bg-gray-100 p-6 rounded-xl shadow hover:bg-gray-200 transition flex flex-col items-center text-center"
        >
          <Users className="w-10 h-10 text-purple-600 mb-4" />
          <h2 className="text-lg font-semibold text-gray-800">Kullanıcı Yönetimi</h2>
          <p className="text-gray-600 text-sm">Kullanıcı bilgilerini görüntüleme ve düzenleme.</p>
        </Link>

        <Link
          to="/admin/logs"
          className="bg-gray-100 p-6 rounded-xl shadow hover:bg-gray-200 transition flex flex-col items-center text-center"
        >
          <FileText className="w-10 h-10 text-red-600 mb-4" />
          <h2 className="text-lg font-semibold text-gray-800">Log Yönetimi</h2>
          <p className="text-gray-600 text-sm">Sistem loglarını görüntüleme ve analiz etme.</p>
        </Link>
      </div>
    </div>
  );
}