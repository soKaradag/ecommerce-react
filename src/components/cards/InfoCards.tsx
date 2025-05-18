import { motion } from "framer-motion";

export default function InfoCards() {
  return (
    <section className="w-full py-12 border-t border-gray-200 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <motion.div whileHover={{ scale: 1.02 }} className="border border-gray-300 rounded-xl p-6 shadow-sm bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <span>🚚</span> Hızlı Teslimat
          </h3>
          <p className="text-sm text-gray-600">
            Siparişlerinizi en kısa sürede kapınıza ulaştırıyoruz. Tüm Türkiye’ye hızlı kargo avantajı.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="border border-gray-300 rounded-xl p-6 shadow-sm bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <span>🔒</span> Güvenli Ödeme
          </h3>
          <p className="text-sm text-gray-600">
            256-bit SSL ile korunan ödeme altyapımızla gönül rahatlığıyla alışveriş yapabilirsiniz.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="border border-gray-300 rounded-xl p-6 shadow-sm bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <span>💬</span> 7/24 Destek
          </h3>
          <p className="text-sm text-gray-600">
            İhtiyacınız olan her an yanınızdayız. Canlı destek ekibimiz 7 gün 24 saat hizmetinizde.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
