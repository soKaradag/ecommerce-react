export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Marka */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Marketly<span className="text-blue-600">.</span>
          </h3>
          <p className="text-sm text-gray-500">
            Akıllı alışverişin yeni adresi. Güvenli, hızlı ve kullanıcı dostu.
          </p>
        </div>

        {/* Menü */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Bağlantılar</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-blue-600 transition">Hakkımızda</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Destek</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Gizlilik Politikası</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Kullanım Şartları</a></li>
          </ul>
        </div>

        {/* Telif */}
        <div className="flex flex-col justify-between">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Marketly. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
