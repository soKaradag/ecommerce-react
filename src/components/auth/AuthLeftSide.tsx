import { slides } from "../../types/ui/Slide";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function AuthLeftSide() {
    const [current, setCurrent] = useState(0);
    const currentSlide = slides[current];

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

  return (
    <div className="flex items-center justify-center h-full">
        <div className="flex flex-col justify-center h-[75vh] items-center rounded-2xl bg-white p-5">
        <div>
            <AnimatePresence mode="wait">
            <motion.img
                key={currentSlide.id}
                src={currentSlide.image}
                alt={currentSlide.title}
                className="w-full h-72 object-cover mb-5"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
            />
            </AnimatePresence>
        </div>

        {/* Noktalar */}
        <div className="flex gap-2">
            {slides.map((_, index) => (
                <button
                key={index}
                className={`${index === current ? "w-10" : "w-3"}  h-3 rounded-full transition-all duration-300 ${
                    index === current ? "bg-black/70" : "bg-black/50"
                }`}
                onClick={() => setCurrent(index)}
                />
            ))}
        </div>

        {/* Başlık ve içerik */}
        <div className="text-center mt-6">
            <h2 className="text-xl font-semibold">{currentSlide.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{currentSlide.content}</p>
        </div>

        {/* Önceki/sonraki butonlar (isteğe bağlı) */}
            <div className="flex justify-between mt-6 gap-24">
            <button
                onClick={prevSlide}
                className="text-gray-600 hover:text-gray-800 transition border-1 border-gray-300"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="text-gray-600 hover:text-gray-800 transition border-1 border-gray-300"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
            </div>

        </div>
    </div>
  );
}