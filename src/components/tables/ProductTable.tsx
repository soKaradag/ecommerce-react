// src/components/tables/ProductTable.tsx
import type {ProductResponse } from "../../types/dto/product";



type Props = {
  products: ProductResponse[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function ProductTable({ products, onEdit, onDelete }: Props) {
  return (
    <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="px-4 py-2 text-left">Ad</th>
          <th className="px-4 py-2 text-left">Açıklama</th>
          <th className="px-4 py-2 text-left">Fiyat</th>
          <th className="px-4 py-2 text-left">Kategori</th>
          <th className="px-4 py-2 text-left">Adet</th> {/* Yeni sütun */}
          <th className="px-4 py-2 text-left">İşlemler</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id} className="border-b hover:bg-gray-100">
            <td className="px-4 py-2">{product.name}</td>
            <td className="px-4 py-2">{product.description}</td>
            <td className="px-4 py-2">{product.price} TL</td>
            <td className="px-4 py-2">{product.category.name}</td>
            <td className="px-4 py-2">{product.quantity}</td> {/* Quantity gösterimi */}
            <td className="px-4 py-2">
              <button
                onClick={() => onEdit(product.id)}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Düzenle
              </button>
              <button
                onClick={() => onDelete(product.id)}
                className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Sil
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
