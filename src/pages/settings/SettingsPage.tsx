import { useState } from "react";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    theme: "light",
    language: "tr",
    notificationsEnabled: true,
    emailUpdates: false,
    darkModeSchedule: false,
    autoUpdates: true,
    twoFactorAuth: false,
    accessibleFonts: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value, type } = target;

    const finalValue = type === "checkbox" ? (target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Ayarlar kaydedildi.");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Ayarlar</h1>
      <p className="text-gray-600 mb-8">Genel uygulama ayarlarını yönetin.</p>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-10"
      >
        {/* Tema Ayarları */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Tema</h2>
          <div className="flex flex-col gap-3">
            <label className="text-sm text-gray-700">Tema seçimi</label>
            <select
              name="theme"
              value={formData.theme}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            >
              <option value="light">Açık Tema</option>
              <option value="dark">Koyu Tema</option>
              <option value="system">Sistem Varsayılanı</option>
            </select>

            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                name="darkModeSchedule"
                checked={formData.darkModeSchedule}
                onChange={handleChange}
              />
              <label className="text-sm text-gray-600">Gece modunu otomatik zamanla</label>
            </div>
          </div>
        </section>

        {/* Dil Ayarları */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Dil</h2>
          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          >
            <option value="tr">Türkçe</option>
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="fr">Français</option>
          </select>
        </section>

        {/* Bildirimler */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Bildirimler</h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                id="notificationsEnabled"
                name="notificationsEnabled"
                type="checkbox"
                checked={formData.notificationsEnabled}
                onChange={handleChange}
                className="h-4 w-4"
              />
              <label htmlFor="notificationsEnabled" className="ml-2 text-sm text-gray-700">
                Anlık bildirimlere izin ver
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="emailUpdates"
                name="emailUpdates"
                type="checkbox"
                checked={formData.emailUpdates}
                onChange={handleChange}
                className="h-4 w-4"
              />
              <label htmlFor="emailUpdates" className="ml-2 text-sm text-gray-700">
                Haftalık e-posta bilgilendirmeleri al
              </label>
            </div>
          </div>
        </section>

        {/* Güvenlik */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Güvenlik</h2>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="twoFactorAuth"
              checked={formData.twoFactorAuth}
              onChange={handleChange}
              className="h-4 w-4"
            />
            <label className="ml-2 text-sm text-gray-700">İki faktörlü kimlik doğrulamayı etkinleştir</label>
          </div>
        </section>

        {/* Erişilebilirlik */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Erişilebilirlik</h2>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="accessibleFonts"
              checked={formData.accessibleFonts}
              onChange={handleChange}
              className="h-4 w-4"
            />
            <label className="ml-2 text-sm text-gray-700">Erişilebilir yazı tipini etkinleştir</label>
          </div>
        </section>

        {/* Güncellemeler */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Uygulama Güncellemeleri</h2>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="autoUpdates"
              checked={formData.autoUpdates}
              onChange={handleChange}
              className="h-4 w-4"
            />
            <label className="ml-2 text-sm text-gray-700">Otomatik güncellemeleri etkinleştir</label>
          </div>
        </section>

        {/* Kaydet Butonu */}
        <div className="text-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Ayarları Kaydet
          </button>
        </div>
      </form>
    </div>
  );
}
