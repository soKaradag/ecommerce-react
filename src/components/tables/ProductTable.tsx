// src/components/tables/ProductTable.tsx
type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string; // Added category property
};

type Props = {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
};

export default function ProductTable({ products, onEdit, onDelete }: Props) {
  return (
    <table className="w-full border mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-2">Ad</th>
          <th className="border px-2">Açıklama</th>
          <th className="border px-2">Fiyat</th>
          <th className="border px-2">İşlem</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td className="border px-2">{p.name}</td>
            <td className="border px-2">{p.description}</td>
            <td className="border px-2">{p.price} ₺</td>
            <td className="border px-2">
              <button onClick={() => onEdit(p)} className="mr-2 text-blue-600">Düzenle</button>
              <button onClick={() => onDelete(p.id)} className="text-red-600">Sil</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
