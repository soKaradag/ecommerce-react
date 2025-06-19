import { useCartStore } from "../../stores/useCartStore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PlaceOrderButton() {
  const { clearCart } = useCartStore();
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePlaceOrder = () => {
    clearCart();
    setShowSuccess(true);
    setTimeout(() => {
      navigate("/");
    }, 2000); // 2 saniye bekleyip yönlendir
  };

  return (
    <div className="w-full">
      <button
        onClick={handlePlaceOrder}
        className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Satın Al
      </button>
      {showSuccess && (
        <p className="mt-2 text-green-600 font-semibold text-center">
          Sipariş başarıyla oluşturuldu!
        </p>
      )}
    </div>
  );
}
