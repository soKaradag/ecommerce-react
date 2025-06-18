import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import { fetchProfilePhoto, uploadProfilePhoto } from "../api/user/profilephoto";

export default function ProfilePhotoSection() {
  const [photoUrl, setPhotoUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const decoded = JSON.parse(atob(token.split(".")[1]));
    const userId = decoded.userId || decoded.sub;

    fetchProfilePhoto(userId)
      .then((url) => setPhotoUrl(url))
      .catch(() => setPhotoUrl(""));
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert("Lütfen bir dosya seçin.");
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const token = localStorage.getItem("token");
      await uploadProfilePhoto(formData, token);
      alert("Profil fotoğrafı yüklendi.");
      window.location.reload(); // veya setPhotoUrl ile güncelle
    } catch {
      alert("Yükleme başarısız.");
    }
  };

  return (
    <div className="mt-8 bg-white p-4 rounded-xl border border-gray-200 shadow">
      <h3 className="text-lg font-bold mb-2">Profil Fotoğrafı</h3>
      {photoUrl ? (
        <img src={photoUrl} alt="Profil" className="w-32 h-32 rounded-full object-cover" />
      ) : (
        <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
          Yok
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mt-4 block"
      />

      <button
        onClick={handleUpload}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Yükle
      </button>
    </div>
  );
}
