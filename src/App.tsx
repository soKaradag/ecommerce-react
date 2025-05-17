import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<div className="text-3xl text-center mt-40">Dashboard'a Hoş Geldin!</div>} />
      </Routes>
    </Router>
  );
}
