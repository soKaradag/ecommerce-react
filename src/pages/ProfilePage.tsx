import { useEffect, useState } from "react";
import { Heart, History, Ticket, Pencil, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [customerInfo, setCustomerInfo] = useState({
    firstName: "Serdar",
    lastName: "Karadağ",
    phone: "+90 555 555 5555",
    address: "İstanbul, Türkiye",
  });

  const [formData, setFormData] = useState({ ...customerInfo });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = JSON.parse(atob(token.split(".")[1]));
      setEmail(decoded.sub);
      setUsername(decoded.sub.split("@")[0]);
    }
  }, []);

  const handleSave = () => {
    setCustomerInfo(formData);
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 relative">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Profil</h1>

      <div className="bg-white shadow rounded-2xl p-6 border border-gray-200 mb-8">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
            {username.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{username}</h2>
            <p className="text-gray-500">{email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600">Ad</label>
            <input
              type="text"
              value={customerInfo.firstName}
              readOnly
              className="w-full border border-gray-300 px-4 py-2 rounded-lg mt-1 bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Soyad</label>
            <input
              type="text"
              value={customerInfo.lastName}
              readOnly
              className="w-full border border-gray-300 px-4 py-2 rounded-lg mt-1 bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Telefon</label>
            <input
              type="text"
              value={customerInfo.phone}
              readOnly
              className="w-full border border-gray-300 px-4 py-2 rounded-lg mt-1 bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Adres</label>
            <input
              type="text"
              value={customerInfo.address}
              readOnly
              className="w-full border border-gray-300 px-4 py-2 rounded-lg mt-1 bg-gray-100"
            />
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700"
        >
          <Pencil size={16} /> Profili Düzenle
        </button>
      </div>

      {/* Alt Kısımdaki Kartlar */}
      <div className="grid md:grid-cols-3 gap-6">
        <Link to="/favorites" className="bg-white border border-gray-200 rounded-xl shadow p-4 hover:shadow-md transition">
          <div className="flex items-center gap-2 text-blue-600 mb-2 font-semibold">
            <Heart size={18} /> Favorilerim
          </div>
          <p className="text-sm text-gray-500">Favorilere eklediğiniz ürünleri görüntüleyin.</p>
        </Link>

        <Link to="/orders" className="bg-white border border-gray-200 rounded-xl shadow p-4 hover:shadow-md transition">
          <div className="flex items-center gap-2 text-blue-600 mb-2 font-semibold">
            <History size={18} /> Satın Alma Geçmişi
          </div>
          <p className="text-sm text-gray-500">Geçmiş siparişlerinizi görüntüleyin.</p>
        </Link>

        <Link to="/support" className="bg-white border border-gray-200 rounded-xl shadow p-4 hover:shadow-md transition">
          <div className="flex items-center gap-2 text-blue-600 mb-2 font-semibold">
            <Ticket size={18} /> Destek Taleplerim
          </div>
          <p className="text-sm text-gray-500">Destek taleplerinizi ve yanıtları görüntüleyin.</p>
        </Link>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xl relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
            <h2 className="text-xl font-bold mb-4">Profili Düzenle</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600">Ad</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg mt-1"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600">Soyad</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg mt-1"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600">Telefon</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg mt-1"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600">Adres</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg mt-1"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
