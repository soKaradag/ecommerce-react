import AuthLeftSide from "../components/auth/AuthLeftSide";
import AuthForm from "../components/auth/AuthForm";
import InfoCards from "../components/cards/InfoCards";
import Testimonials from "../components/cards/Testimonials";
import Footer from "../components/Footer";
import Newsletter from "../components/cards/Newsletter";

export default function AuthPage() {
  return (
    <div className="flex flex-col  min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex flex-col items-center justify-center py-5 bg-white h-[12vh] border-b border-gray-200">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-800">
            Marketly<span className="text-blue-600">.</span>
          </h1>
          <p className="text-sm text-gray-500 mt-1">Akıllı Alışverişin Yeni Adı</p>
        </div>
      </header>

      {/* Main Auth Section */}
      <div className="flex flex-1 m-6 gap-6">
        <div className="w-[60vw] h-full bg-gray-50">
          <AuthLeftSide />
        </div>
        <div className="w-[40vw] h-full bg-gray-50">
          <AuthForm />
        </div>
      </div>

      {/* Onboarding */}
      <InfoCards />
      <Testimonials />
      <Newsletter />
      <Footer />

    </div>
  );
}
