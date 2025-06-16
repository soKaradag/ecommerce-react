import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ShoppingCart,
  LayoutDashboard,
  Search,
  User,
  Settings,
  LogOut
} from "lucide-react";
import { useAuthStore } from "../stores/useAuthStore";

export default function Navbar() {
  const { isAuthenticated, role, logout } = useAuthStore();
  const navigate = useNavigate(); 

  const email = localStorage.getItem("token")
    ? JSON.parse(atob(localStorage.getItem("token")!.split(".")[1])).sub
    : "";

  const username = email.split("@")[0] || "Kullanıcı";
  const initial = username.charAt(0).toUpperCase();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white border-b border-gray-200 relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Sol: Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Marketly<span className="text-blue-600">.</span>
        </Link>

        {/* Orta: Search bar */}
        <div className="w-full max-w-md mx-6 relative">
          <input
            type="text"
            placeholder="Ürün ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Sağ: Menü */}
        <div className="flex items-center gap-6 text-sm">
          {isAuthenticated ? (
            <div className="flex items-center justify-center gap-2 relative">
              {role === "CUSTOMER" && (
                <Link to="/cart" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <ShoppingCart className="w-4 h-4" /> Sepet
                </Link>
              )}
              {role === "ADMIN" && (
                <Link to="/admin" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <LayoutDashboard className="w-4 h-4" /> Panel
                </Link>
              )}
              <div className="text-sm text-gray-500 font-bold">{email}</div>
              <button
                onClick={toggleMenu}
                className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold hover:ring-2 hover:ring-blue-400 transition"
              >
                {initial}
              </button>

              {isMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="w-4 h-4" /> Profil
                  </Link>
                  <Link
                    to="/settings"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Settings className="w-4 h-4" /> Ayarlar
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                  >
                    <LogOut className="w-4 h-4" /> Çıkış Yap
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
