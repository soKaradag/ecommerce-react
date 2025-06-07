import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserDashboard from "./pages/user/UserDashboard";
import FavoritesPage from "./pages/user/FavoritesPage";
import OrderHistoryPage from "./pages/user/OrderHistoryPage";
import SupportTicketPage from "./pages/user/SupportTicketPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />

        <Route path="/" element={<HomePage />}>
          <Route index element={<UserDashboard />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
          <Route path="/support" element={<SupportTicketPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
