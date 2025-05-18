import { useForm } from "react-hook-form";
import { useAuthFormStore } from "../../stores/useAuthFormStore";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/useAuthStore";

type AuthFormInputs = {
  email: string;
  password: string;
  confirmPassword?: string;
  terms?: boolean;
};

export default function AuthForm() {
  const { formType, toggleFormType } = useAuthFormStore();
  const navigate = useNavigate();
  const { login } = useAuthStore();


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuthFormInputs>();

  const onSubmit = (data: AuthFormInputs) => {
    console.log("Submitted:", data);
    
    if (formType === "login") {
      // Simule giriş: burada e-posta adminse admin rolü veriyoruz
      const isAdmin = data.email.toLowerCase().includes("admin");
      login(isAdmin ? "admin" : "user");

      navigate("/");
    } else {
      toggleFormType(); // kayıt modundaysa login moduna geç
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center bg-white rounded-2xl border border-gray-300 p-8 h-[75vh] w-full"
      >
        <h2 className="text-2xl font-bold leading-tight text-left w-full mb-8">
          {formType === "login" ? "Giriş Yap" : "Kayıt Ol"}
        </h2>

        {/* Email */}
        <div className="w-full mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            E-posta
          </label>
          <input
            type="email"
            {...register("email", {
              required: "E-posta zorunludur",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Geçerli bir e-posta girin",
              },
            })}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-400"
            placeholder="ornek@mail.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="w-full mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Şifre
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Şifre zorunludur",
              minLength: {
                value: 6,
                message: "En az 6 karakter",
              },
            })}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-400"
            placeholder="••••••••"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Register-specific fields */}
        <AnimatePresence>
          {formType === "register" && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full mb-4"
              >
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Şifre Tekrar
                </label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: "Şifre tekrarı zorunlu",
                    validate: (value) =>
                      value === watch("password") || "Şifreler eşleşmiyor",
                  })}
                  className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-400"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full mb-4"
              >
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    {...register("terms", { required: true })}
                  />
                  Kullanım şartlarını kabul ediyorum
                </label>
                {errors.terms && (
                  <p className="text-red-500 text-sm mt-1">
                    Şartları kabul etmelisiniz
                  </p>
                )}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 mt-4 rounded-xl hover:bg-blue-700 transition"
        >
          {formType === "login" ? "Giriş Yap" : "Kayıt Ol"}
        </button>

        <div className="w-full mt-6 text-left text-sm text-gray-500">
          {formType === "login" ? (
            <>
              <p className="mt-2">
                Şifrenizi mi unuttunuz?{" "}
                <button
                  onClick={() => navigate("/forgot-password")}
                  type="button"
                  className="text-blue-600 hover:underline"
                >
                  PAROLA SIFIRLA
                </button>
              </p>
              <p>
                Hesabınız yok mu?{" "}
                <button
                  onClick={toggleFormType}
                  type="button"
                  className="text-blue-600 hover:underline"
                >
                  KAYIT OL
                </button>
              </p>
            </>
          ) : (
            <p>
              Zaten hesabınız var mı?{" "}
              <button
                onClick={toggleFormType}
                type="button"
                className="text-blue-600 hover:underline"
              >
                Giriş Yap
              </button>
            </p>
          )}
        </div>


        
      </form>
    </div>

  );
}
