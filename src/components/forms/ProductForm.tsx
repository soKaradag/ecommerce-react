import { useEffect, useState } from "react";
import { fetchCategories } from "../../api/product/categoryApi";
import type { ProductRequest } from "../../api/product/productApi";

type Props = {
  onSubmit: (data: ProductRequest) => void;
  initialData?: ProductRequest & { id?: string };
};

export default function ProductForm({ onSubmit, initialData }: Props) {
  const [name, setName] = useState(initialData?.name || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [price, setPrice] = useState(initialData?.price || 0);
  const [categoryId, setCategoryId] = useState(initialData?.categoryId || "");
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, description, price, categoryId });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Ürün Adı"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border px-4 py-2 rounded"
        required
      />
      <textarea
        placeholder="Açıklama"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border px-4 py-2 rounded"
        required
      />
      <input
        type="number"
        placeholder="Fiyat"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="w-full border px-4 py-2 rounded"
        required
      />

      <select
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
        className="w-full border px-4 py-2 rounded"
        required
      >
        <option value="">Kategori Seç</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
        {initialData ? "Güncelle" : "Ekle"}
      </button>
    </form>
  );
}
