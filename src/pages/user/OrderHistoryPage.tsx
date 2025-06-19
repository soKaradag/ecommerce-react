import { useEffect, useState } from "react";
import type { OrderResponse } from "../../types/dto/order";
import axios from "../../api/axios";

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState<OrderResponse[]>([]);
  const [loading, setLoading] = useState(true);

  const userId = JSON.parse(atob(localStorage.getItem("token")!.split(".")[1])).userId;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`/orders/user/${userId}`);
        setOrders(res.data);
      } catch (error) {
        console.error("Siparişler alınamadı:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Sipariş Geçmişi</h1>

      {loading ? (
        <p className="text-gray-500">Yükleniyor...</p>
      ) : orders.length === 0 ? (
        <p className="text-gray-600">Henüz bir siparişiniz bulunmamaktadır.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-700">
                  Sipariş #{order.id.slice(0, 8).toUpperCase()}
                </h2>
                <span className="text-sm text-gray-500">{new Date(order.createdAt).toLocaleDateString()}</span>
              </div>

              <ul className="divide-y divide-gray-200">
                {order.items.map((item) => (
                  <li key={item.id} className="py-2 flex justify-between text-gray-700">
                    <span>
                      {item.productName} <span className="text-sm text-gray-500">x{item.quantity}</span>
                    </span>
                    <span>{item.totalPrice.toFixed(2)} ₺</span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-gray-500">
                  Durum: <span className="font-medium text-blue-600">{order.status}</span>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  Toplam: {order.totalAmount.toFixed(2)} ₺
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
