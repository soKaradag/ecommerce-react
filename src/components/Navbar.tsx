// components/Navbar.tsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart, LayoutDashboard, PackageSearch } from "lucide-react";
import { useAuthStore } from "../stores/useAuthStore";

export default function Navbar() {
  const { isAuthenticated, role, logout } = useAuthStore();
  const username = "Serdar"; // Örnek kullanıcı adı (ileride store'dan çekilebilir)
  const initial = username.charAt(0).toUpperCase();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white border-b border-gray-200 relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Marketly<span className="text-blue-600">.</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          {isAuthenticated && role === "admin" ? (
            <>
              <Link to="/" className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition">
                <LayoutDashboard className="w-4 h-4" /> Panel
              </Link>
              <Link to="/products" className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition">
                <PackageSearch className="w-4 h-4" /> Ürünler
              </Link>
            </>
          ) : isAuthenticated && role === "user" ? (
            <Link to="/cart" className="flex items-center gap-1 text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition border-1 border-gray-300 px-2 py-1 rounded-sm">
              <ShoppingCart className="w-4 h-4" /> Sepet
            </Link>
          ) : null}

          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={toggleMenu}
                className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold hover:ring-2 hover:ring-blue-400 transition"
              >
                {initial}
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-lg py-2">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profil
                  </Link>
                  <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Ayarlar
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                  >
                    Çıkış Yap
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/auth" className="flex items-center gap-1 text-white hover:bg-blue-700 bg-blue-600 transition border-1 border-gray-300 p-2 rounded-sm">
              Giriş Yap
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
