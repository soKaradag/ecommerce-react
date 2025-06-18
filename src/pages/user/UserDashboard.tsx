import { useState, useEffect } from "react";
import { MoreHorizontal, ChevronDown } from "lucide-react";
import ProductCard from "../../components/cards/ProductCard";
import { fetchCategories } from "../../api/product/categoryApi";
import { fetchProducts } from "../../api/product/productApi";
import type { CategoryResponse, ProductResponse } from "../../types/dto/product";

export default function UserDashboard() {
  const [categories, setCategories] = useState<CategoryResponse[]>([]);
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [showAll, setShowAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("none");
  const [showSort, setShowSort] = useState(false);

  const productsPerPage = 8;
  const visibleCount = 6;
  const visibleCategories = categories.slice(0, visibleCount);
  const overflowCategories = categories.slice(visibleCount);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [categoryData, productData] = await Promise.all([
          fetchCategories(),
          fetchProducts(),
        ]);
        setCategories(categoryData);
        setProducts(productData);
      } catch (err) {
        console.error("Veriler yüklenemedi:", err);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const filteredProducts =
    selectedCategory === "Tümü"
      ? products
      : products.filter((p) => p.category.name === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

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
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.name);
                      setShowAll(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {cat.name}
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
          Tümü
        </button>

        {visibleCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.name)}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              selectedCategory === cat.name
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Sıralama */}
      <div className="relative flex justify-end mb-6">
        <button
          onClick={() => setShowSort(!showSort)}
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

      {/* Ürünler */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.name}
            category={product.category.name}
            price={product.price}
            isAdmin={true} // sadece admin'de aktif olacak
          />

        ))}
      </div>

      {/* Sayfalama */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 gap-2 border-t border-gray-300 pt-3">
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
