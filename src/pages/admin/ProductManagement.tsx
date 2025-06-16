import { useEffect, useState } from "react";
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../api/product/productApi";
import type { ProductRequest, ProductResponse } from "../../api/product/productApi";
import ProductForm from "../../components/forms/ProductForm";
import ProductTable from "../../components/tables/ProductTable";
import type { Product } from "../../types/dto/product";

export default function ProductManagement() {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [editingProduct, setEditingProduct] = useState<ProductResponse | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      console.log("Ürünler API'den dönen veri:", data);
      setProducts(data);
    } catch (err) {
      console.error("Ürünleri yüklerken hata oluştu:", err);
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
      alert("Bir hata oluştu.");
    }
  };

  const handleEdit = (product: ProductResponse) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Bu ürünü silmek istediğinize emin misiniz?")) {
      await deleteProduct(id);
      loadProducts();
    }
  };

  const mapProductResponseToProduct = (productResponse: ProductResponse): Product => ({
    id: productResponse.id,
    name: productResponse.name,
    description: productResponse.description,
    price: productResponse.price,
    category: productResponse.category.name, // Assuming category is an object with a name property
  });

  const mapProductResponseToRequest = (productResponse: ProductResponse): ProductRequest => ({
    name: productResponse.name,
    description: productResponse.description,
    price: productResponse.price,
    categoryId: productResponse.category.id, // Assuming category has an id property
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Ürün Yönetimi</h2>
        <button
          onClick={() => {
            setEditingProduct(null);
            setIsModalOpen(true);
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Ürün Ekle
        </button>
      </div>

      <ProductTable
        products={products.map(mapProductResponseToProduct)}
        onEdit={(product: Product) => handleEdit(products.find(p => p.id === product.id)!)}
        onDelete={(id: string) => handleDelete(id)}
      />

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
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
