// pages/user/UserDashboard.tsx
import { useState, useEffect } from "react";
import { MoreHorizontal, ChevronDown } from "lucide-react";
import ProductCard from "../../components/cards/ProductCard";

const categories = [
  { name: "Elektronik", icon: "📱" },
  { name: "Giyim", icon: "👗" },
  { name: "Ev & Yaşam", icon: "🏠" },
  { name: "Kitap", icon: "📚" },
  { name: "Spor", icon: "🏋️" },
  { name: "Oyuncak", icon: "🧸" },
  { name: "Kozmetik", icon: "💄" },
  { name: "Market", icon: "🛒" },
];

const products = [
  { title: "Bluetooth Kulaklık", category: "Elektronik", price: 299.99 },
  { title: "Yazlık Elbise", category: "Giyim", price: 179.99 },
  { title: "Yatak Örtüsü", category: "Ev & Yaşam", price: 249.9 },
  { title: "Roman Kitabı", category: "Kitap", price: 89.9 },
  { title: "Koşu Ayakkabısı", category: "Spor", price: 399.0 },
  { title: "Lego Seti", category: "Oyuncak", price: 189.5 },
  { title: "Ruj Seti", category: "Kozmetik", price: 129.75 },
  { title: "Organik Yulaf Ezmesi", category: "Market", price: 54.99 },
  { title: "Kablosuz Şarj Aleti", category: "Elektronik", price: 229.99 },
  { title: "Sneaker", category: "Giyim", price: 349.0 },
  { title: "Masa Lambası", category: "Ev & Yaşam", price: 120.0 },
  { title: "Klasik Roman", category: "Kitap", price: 59.0 },
  { title: "Dambıl Seti", category: "Spor", price: 599.0 },
  { title: "Puzzle 1000 Parça", category: "Oyuncak", price: 119.99 },
  { title: "Fondöten", category: "Kozmetik", price: 109.99 },
  { title: "Zeytinyağı 1L", category: "Market", price: 89.99 },
  { title: "Laptop Soğutucu", category: "Elektronik", price: 189.99 },
  { title: "Kadın Ceket", category: "Giyim", price: 279.5 },
  { title: "Duvar Rafı", category: "Ev & Yaşam", price: 159.0 },
];

export default function UserDashboard() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [showAll, setShowAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("none");
  const [showSort, setShowSort] = useState(false);
  const productsPerPage = 16;

  const visibleCount = 6;
  const visibleCategories = categories.slice(0, visibleCount);
  const overflowCategories = categories.slice(visibleCount);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const filteredProducts =
    selectedCategory === "Tümü"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const paginatedProducts = sortedProducts.slice(start, end);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Kategori Filtreleme */}
      <div className="flex flex-wrap justify-center gap-3 mb-6 relative border-b border-gray-300 pb-6">
        {overflowCategories.length > 0 && (
          <div className="relative">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-4 py-2 rounded-full text-sm border border-gray-300 bg-white hover:bg-gray-100 flex items-center gap-1"
            >
              <MoreHorizontal className="w-4 h-4" /> Tüm Kategoriler
            </button>
            {showAll && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-xl border w-48 z-10">
                {overflowCategories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => {
                      setSelectedCategory(cat.name);
                      setShowAll(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2"
                  >
                    <span>{cat.icon}</span> {cat.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        <button
          onClick={() => setSelectedCategory("Tümü")}
          className={`px-4 py-2 rounded-full text-sm border transition ${
            selectedCategory === "Tümü"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          🔄 Tümü
        </button>

        {visibleCategories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className={`px-4 py-2 rounded-full text-sm border transition flex items-center gap-1 ${
              selectedCategory === cat.name
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            <span>{cat.icon}</span> {cat.name}
          </button>
        ))}
      </div>

      {/* Özel Dropdown ile Sıralama Menüsü */}
      <div className="relative flex justify-end mb-6">
        <button
          onClick={() => setShowSort((prev) => !prev)}
          className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 rounded-lg bg-white hover:bg-gray-100"
        >
          {sortBy === "price-asc"
            ? "Fiyat Artan"
            : sortBy === "price-desc"
            ? "Fiyat Azalan"
            : "Varsayılan"}{" "}
          <ChevronDown className="w-4 h-4" />
        </button>

        {showSort && (
          <div className="absolute top-full mt-2 right-0 w-48 bg-white border border-gray-200 rounded-lg shadow-md z-10">
            <button
              onClick={() => {
                setSortBy("none");
                setShowSort(false);
              }}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            >
              Varsayılan
            </button>
            <button
              onClick={() => {
                setSortBy("price-asc");
                setShowSort(false);
              }}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            >
              Fiyat Artan
            </button>
            <button
              onClick={() => {
                setSortBy("price-desc");
                setShowSort(false);
              }}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            >
              Fiyat Azalan
            </button>
          </div>
        )}
      </div>

      {/* Ürün Listesi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedProducts.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            category={product.category}
            price={product.price}
          />
        ))}
      </div>

      {/* Sayfalama */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 gap-2 border-t-1 border-t-gray-300 pt-3">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-lg text-sm border ${
                currentPage === page
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
