// src/pages/LogManagement.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getAllLogs } from "../../api/log/getAllLogs";
import type { LogResponse } from "../../types/dto/logging";

export default function LogManagement() {
  const navigate = useNavigate();
  const [logs, setLogs] = useState<LogResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const data = await getAllLogs();
        setLogs(data);
      } catch (error) {
        console.error("Loglar alınamadı:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate("/admin")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-3xl font-bold text-gray-800">Log Yönetimi</h1>
      </div>
      <p className="text-gray-600 mb-6">Sistem loglarını görüntüleme ve analiz etme.</p>

      {loading ? (
        <p className="text-gray-500">Yükleniyor...</p>
      ) : logs.length === 0 ? (
        <p className="text-gray-500">Hiç log bulunamadı.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {logs.map((log) => (
            <div
              key={log.id}
              className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <p className="text-sm text-gray-400 mb-2">
                {new Date(log.timestamp).toLocaleString()}
              </p>
              <p className="text-gray-800">{log.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
