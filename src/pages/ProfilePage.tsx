import { useEffect, useRef, useState, type JSX, type ChangeEvent } from "react";
import { Heart, History, Ticket, Pencil, X } from "lucide-react";
import { Link } from "react-router-dom";
import { updateCustomerInfo } from "../api/customer/updateCustomerInfo";
import { fetchCustomerInfo } from "../api/customer/fetchCustomerInfo";
import { fetchProfilePhoto, uploadProfilePhoto } from "../api/customer/profilephoto";

type Gender = {
  id: string;
  name: string;
};

type CustomerInfoResponse = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  phoneNumber: string;
  gender: string | { id: string; name: string };
  country: string;
  city: string;
  zipCode: string;
  openAddress: string;
};

type UpdateCustomerInfoRequest = {
  firstName: string;
  lastName: string;
  age: number;
  phoneNumber: string;
  genderId: string;
  country: string;
  city: string;
  zipCode: string;
  openAddress: string;
};

export default function ProfilePage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [genderId, setGenderId] = useState("");
  const [genders, setGenders] = useState<Gender[]>([]);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfoResponse | null>(null);
  const [formData, setFormData] = useState<UpdateCustomerInfoRequest>({
    firstName: "",
    lastName: "",
    age: 0,
    phoneNumber: "",
    genderId: "",
    country: "",
    city: "",
    zipCode: "",
    openAddress: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const decoded = JSON.parse(atob(token.split(".")[1]));
    setEmail(decoded.sub);
    const uname = decoded.sub.split("@")[0];
    setUsername(uname);
    const id = decoded.userId || decoded.sub;
    setUserId(id);

    fetchCustomerInfo(id).then((data) => {
      setCustomerInfo(data);
      const genderObj = typeof data.gender === "string" ? null : (data.gender as Gender);

      setFormData({
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
        phoneNumber: data.phoneNumber,
        genderId: genderObj ? genderObj.id : "",
        country: data.country,
        city: data.city,
        zipCode: data.zipCode,
        openAddress: data.openAddress,
      });

      if (typeof data.gender !== "string") {
        const genderObj = data.gender as Gender;
        setGenderId(genderObj.id);
      }

    });

    fetch("http://localhost:8080/api/genders")
      .then((res) => res.json())
      .then((data: Gender[]) => setGenders(data));

    fetchProfilePhoto(id).then((url) => {
      setPhotoUrl(`http://localhost:8080${url}`);
    });
  }, []);

  const handleSave = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      await updateCustomerInfo(userId, formData);
      alert("Profil güncellendi.");
      setIsModalOpen(false);
    } catch {
      alert("Güncelleme hatası.");
    }
  };

  const handlePhotoClick = () => fileInputRef.current?.click();

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    const token = localStorage.getItem("token");

    try {
      await uploadProfilePhoto(formData, token);
      const url = await fetchProfilePhoto(userId);
      setPhotoUrl(url);
    } catch {
      alert("Yükleme hatası.");
    }
  };

  if (!customerInfo) return <div className="p-8">Yükleniyor...</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 relative">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Profil</h1>

      <div className="bg-white shadow rounded-2xl p-6 border border-gray-200 mb-8">
        <div className="flex items-center gap-6 mb-6">
        <div
          onClick={handlePhotoClick}
          className="w-20 h-20 rounded-full overflow-hidden cursor-pointer border border-gray-300 shadow-sm"
          title="Profil fotoğrafını değiştir"
        >
          {photoUrl ? (
            <img
              src={photoUrl}
              alt="Profil"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
              {username.charAt(0).toUpperCase()}
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </div>


          <div>
            <h2 className="text-xl font-semibold text-gray-800">{username}</h2>
            <p className="text-gray-500">{email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Display label="Ad" value={customerInfo.firstName} />
          <Display label="Soyad" value={customerInfo.lastName} />
          <Display label="Telefon" value={customerInfo.phoneNumber} />
          <Display label="Yaş" value={String(customerInfo.age)} />
          <Display label="Adres" value={customerInfo.openAddress} />
          <Display label="Şehir" value={customerInfo.city} />
          <Display label="Ülke" value={customerInfo.country} />
          <Display label="Posta Kodu" value={customerInfo.zipCode} />
          <Display label="Cinsiyet" value={typeof customerInfo.gender === "string" ? customerInfo.gender : customerInfo.gender.name} />
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700"
        >
          <Pencil size={16} /> Profili Düzenle
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <ProfileLink to="/favorites" icon={<Heart size={18} />} title="Favorilerim" desc="Favorilere eklediğiniz ürünleri görüntüleyin." />
        <ProfileLink to="/orders" icon={<History size={18} />} title="Siparişlerim" desc="Geçmiş siparişlerinizi görüntüleyin." />
        <ProfileLink to="/support" icon={<Ticket size={18} />} title="Destek Taleplerim" desc="Destek taleplerinizi ve yanıtları görüntüleyin." />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xl relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
            <h2 className="text-xl font-bold mb-4">Profili Düzenle</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Ad", key: "firstName" },
                { label: "Soyad", key: "lastName" },
                { label: "Telefon", key: "phoneNumber" },
                { label: "Yaş", key: "age" },
                { label: "Adres", key: "openAddress" },
                { label: "Şehir", key: "city" },
                { label: "Ülke", key: "country" },
                { label: "Posta Kodu", key: "zipCode" },
              ].map(({ label, key }) => (
                <div key={key}>
                  <label className="block text-sm text-gray-600">{label}</label>
                  <input
                    type={key === "age" ? "number" : "text"}
                    value={(formData as any)[key]}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg mt-1"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm text-gray-600">Cinsiyet</label>
                <select
                  value={genderId}
                  onChange={(e) => {
                    setGenderId(e.target.value);
                    setFormData({ ...formData, genderId: e.target.value });
                  }}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg mt-1"
                >
                  <option value="" disabled>Seçiniz</option>
                  {genders.map((g) => (
                    <option key={g.id} value={g.id}>{g.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Kaydet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Display({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="block text-sm text-gray-600">{label}</label>
      <input value={value} readOnly className="w-full border px-4 py-2 rounded-lg mt-1 bg-gray-100" />
    </div>
  );
}

function ProfileLink({ to, icon, title, desc }: { to: string; icon: JSX.Element; title: string; desc: string }) {
  return (
    <Link to={to} className="bg-white border border-gray-200 rounded-xl shadow p-4 hover:shadow-md transition">
      <div className="flex items-center gap-2 text-blue-600 mb-2 font-semibold">
        {icon} {title}
      </div>
      <p className="text-sm text-gray-500">{desc}</p>
    </Link>
  );
}
