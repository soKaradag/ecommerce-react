// src/pages/admin/ProductManagement.tsx
import { useEffect, useState } from "react";
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../api/product/productApi";
import ProductForm from "../../components/forms/ProductForm";
import ProductTable from "../../components/tables/ProductTable";
import type { ProductRequest, ProductResponse } from "../../types/dto/product";

export default function ProductManagement() {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [editingProduct, setEditingProduct] = useState<ProductResponse | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      console.error("Ürünleri yüklerken hata oluştu:", err);
      alert("Ürünleri yüklerken bir hata oluştu.");
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSubmit = async (data: ProductRequest) => {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, data);
        alert("Ürün başarıyla güncellendi.");
      } else {
        await createProduct(data);
        alert("Ürün başarıyla eklendi.");
      }
      setIsModalOpen(false);
      setEditingProduct(null);
      loadProducts();
    } catch (err) {
      console.error("Ürün kaydedilirken hata oluştu:", err);
      alert("Hata oluştu.");
    }
  };

  const handleEdit = (product: ProductResponse) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Bu ürünü silmek istediğinizden emin misiniz?")) {
      try {
        await deleteProduct(id);
        alert("Ürün silindi.");
        loadProducts();
      } catch (err) {
        console.error("Silme hatası:", err);
        alert("Silinirken hata oluştu.");
      }
    }
  };

  const mapProductResponseToRequest = (res: ProductResponse): ProductRequest => ({
    name: res.name,
    description: res.description,
    price: res.price,
    categoryId: res.category.id,
    quantity: res.quantity,
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Ürün Yönetimi</h2>
        <button
          onClick={() => {
            setEditingProduct(null);
            setIsModalOpen(true);
          }}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
        >
          + Ürün Ekle
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <ProductTable
          products={products}
          onEdit={(id: string) => {
            const product = products.find(p => p.id === id);
            if (product) handleEdit(product);
          }}
          onDelete={handleDelete}
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
            >
              ✕
            </button>
            <ProductForm
              onSubmit={handleSubmit}
              initialData={editingProduct ? mapProductResponseToRequest(editingProduct) : undefined}
            />
          </div>
        </div>
      )}
    </div>
  );
}
