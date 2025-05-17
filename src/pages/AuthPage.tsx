import AuthLeftSide from "../components/auth/AuthLeftSide";
import AuthForm from "../components/auth/AuthForm";
import { motion } from "framer-motion";


export default function AuthPage() {
  return (
    <div className="flex flex-col  min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex flex-col items-center justify-center py-5 bg-white h-[12vh] border-b border-gray-200">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-800">
            Marketly<span className="text-blue-600">.</span>
          </h1>
          <p className="text-sm text-gray-500 mt-1">Akıllı Alışverişin Yeni Adı</p>
        </div>
      </header>

      {/* Main Auth Section */}
      <div className="flex flex-1 m-6 gap-6">
        <div className="w-[60vw] h-full bg-gray-50">
          <AuthLeftSide />
        </div>
        <div className="w-[40vw] h-full bg-gray-50">
          <AuthForm />
        </div>
      </div>

    {/* Info Cards */}
        <section className="w-full py-12 border-t border-gray-200 bg-white">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
            <motion.div
            whileHover={{ scale: 1.02 }}
            className="border border-gray-300 rounded-xl p-6 shadow-sm bg-gray-50"
            >
            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <span>🚚</span> Hızlı Teslimat
            </h3>
            <p className="text-sm text-gray-600">
                Siparişlerinizi en kısa sürede kapınıza ulaştırıyoruz. Tüm Türkiye’ye hızlı kargo avantajı.
            </p>
            </motion.div>

            <motion.div
            whileHover={{ scale: 1.02 }}
            className="border border-gray-300 rounded-xl p-6 shadow-sm bg-gray-50"
            >
            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <span>🔒</span> Güvenli Ödeme
            </h3>
            <p className="text-sm text-gray-600">
                256-bit SSL ile korunan ödeme altyapımızla gönül rahatlığıyla alışveriş yapabilirsiniz.
            </p>
            </motion.div>

            <motion.div
            whileHover={{ scale: 1.02 }}
            className="border border-gray-300 rounded-xl p-6 shadow-sm bg-gray-50"
            >
            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <span>💬</span> 7/24 Destek
            </h3>
            <p className="text-sm text-gray-600">
                İhtiyacınız olan her an yanınızdayız. Canlı destek ekibimiz 7 gün 24 saat hizmetinizde.
            </p>
            </motion.div>
        </motion.div>
    </section>

    <section className="w-full bg-gray-50 py-16 border-t border-gray-200">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto px-6 text-center"
  >
    <h2 className="text-2xl font-bold text-gray-800 mb-2">Kullanıcılarımız Ne Diyor?</h2>
    <p className="text-sm text-gray-500 mb-10">
      Marketly kullanıcılarından gelen gerçek yorumlar.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Yorum 1 */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 text-left">
        <p className="text-sm text-gray-700 italic mb-4 min-h-16">
          “Ürünler tam zamanında ve özenle paketlenmiş şekilde geldi. Müşteri hizmetleri de çok yardımcıydı.”
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          <div>
            <p className="text-sm font-semibold text-gray-800">Elif Yıldız</p>
            <p className="text-xs text-gray-500">İstanbul</p>
          </div>
        </div>
      </div>

      {/* Yorum 2 */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 text-left">
        <p className="text-sm text-gray-700 italic mb-4 min-h-16">
          “Kredi kartı bilgilerim güvende olduğu için gönül rahatlığıyla alışveriş yapabiliyorum.”
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          <div>
            <p className="text-sm font-semibold text-gray-800">Ahmet Demir</p>
            <p className="text-xs text-gray-500">Ankara</p>
          </div>
        </div>
      </div>

      {/* Yorum 3 */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 text-left">
        <p className="text-sm text-gray-700 italic mb-4 min-h-16">
          “Marketly'yi arkadaşlarıma da önerdim, şimdi onlar da buradan alışveriş yapıyor :)”
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          <div>
            <p className="text-sm font-semibold text-gray-800">Buse Karaca</p>
            <p className="text-xs text-gray-500">İzmir</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
</section>


<section className="w-full bg-white border-t border-gray-200 py-18 mt-10">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="max-w-3xl mx-auto px-6 text-center"
  >
    <h2 className="text-2xl font-bold text-gray-800 mb-2">Yeniliklerden İlk Sen Haberdar Ol</h2>
    <p className="text-sm text-gray-500 mb-6">
      Kampanyalardan ve özel fırsatlardan haberdar olmak için bültenimize abone olun.
    </p>
    <form className="flex flex-col sm:flex-row justify-center gap-4">
      <input
        type="email"
        placeholder="E-posta adresiniz"
        className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-80"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Abone Ol
      </button>
    </form>
  </motion.div>
</section>

<footer className="bg-gray-50 border-t border-gray-200 py-10">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Marka Bölümü */}
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">
        Marketly<span className="text-blue-600">.</span>
      </h3>
      <p className="text-sm text-gray-500">
        Akıllı alışverişin yeni adresi. Güvenli, hızlı ve kullanıcı dostu.
      </p>
    </div>

    {/* Menü Bağlantıları */}
    <div>
      <h4 className="text-sm font-semibold text-gray-700 mb-3">Bağlantılar</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li><a href="#" className="hover:text-blue-600 transition">Hakkımızda</a></li>
        <li><a href="#" className="hover:text-blue-600 transition">Destek</a></li>
        <li><a href="#" className="hover:text-blue-600 transition">Gizlilik Politikası</a></li>
        <li><a href="#" className="hover:text-blue-600 transition">Kullanım Şartları</a></li>
      </ul>
    </div>

    {/* Telif ve Sosyal */}
    <div className="flex flex-col justify-between">
      <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Marketly. Tüm hakları saklıdır.</p>
      {/* Sosyal medya ikonları opsiyonel olarak buraya eklenebilir */}
    </div>
  </div>
</footer>





    </div>
  );
}
