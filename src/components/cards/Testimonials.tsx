import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="w-full bg-gray-50 py-16 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Kullanıcılarımız Ne Diyor?</h2>
        <p className="text-sm text-gray-500 mb-10">Marketly kullanıcılarından gelen gerçek yorumlar.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: "Ürünler tam zamanında ve özenle paketlenmiş şekilde geldi. Müşteri hizmetleri de çok yardımcıydı.",
              name: "Elif Yıldız",
              city: "İstanbul",
            },
            {
              quote: "Kredi kartı bilgilerim güvende olduğu için gönül rahatlığıyla alışveriş yapabiliyorum.",
              name: "Ahmet Demir",
              city: "Ankara",
            },
            {
              quote: "Marketly'yi arkadaşlarıma da önerdim, şimdi onlar da buradan alışveriş yapıyor :)",
              name: "Buse Karaca",
              city: "İzmir",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 text-left">
              <p className="text-sm text-gray-700 italic mb-4 min-h-16">“{item.quote}”</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
