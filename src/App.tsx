import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserDashboard from "./pages/user/UserDashboard";
import FavoritesPage from "./pages/user/FavoritesPage";
import OrderHistoryPage from "./pages/user/OrderHistoryPage";
import SupportTicketPage from "./pages/user/SupportTicketPage";
import ProductManagement from "./pages/admin/ProductManagement";
import OrderManagement from "./pages/admin/OrderManagement";
import UserManagement from "./pages/admin/UserManagement";
import LogManagement from "./pages/admin/LogManagement";
import CartPage from "./pages/cart/CartPage";
import SettingsPage from "./pages/settings/SettingsPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />

        <Route path="/" element={<HomePage />}>
          <Route index element={<UserDashboard />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="orders" element={<OrderHistoryPage />} />
          <Route path="support" element={<SupportTicketPage />} />

          {/* Admin Routes */}
          <Route path="admin/products" element={<ProductManagement />} />
          <Route path="admin/orders" element={<OrderManagement />} />
          <Route path="admin/users" element={<UserManagement />} />
          <Route path="admin/logs" element={<LogManagement />} />

          {/* New Routes */}
          <Route path="cart" element={<CartPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}