import { motion } from "framer-motion";

export default function Newsletter() {
  return (
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
  );
}
