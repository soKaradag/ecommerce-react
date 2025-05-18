import Navbar from "../components/Navbar";
import AdminDashboard from "./admin/AdminDashboard";
import UserDashboard from "./user/UserDashboard";

const mockUser = { role: "user" };

export default function HomePage() {
  return (
    <div>
      <Navbar />
      {mockUser.role === "admin" ? <AdminDashboard /> : <UserDashboard />}
    </div>
  );
}