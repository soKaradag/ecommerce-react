export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin Paneli</h1>
      <p className="text-gray-600 mb-8">Sipariş yönetimi, ürün ekleme ve daha fazlası.</p>
      {/* Yönetim panelleri */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-xl shadow">Ürün Yönetimi</div>
        <div className="bg-gray-100 p-6 rounded-xl shadow">Siparişler</div>
      </div>
    </div>
  );
}