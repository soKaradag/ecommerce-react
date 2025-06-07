import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="px-4 py-6">
        <Outlet />
      </div>
    </>
  );
}
