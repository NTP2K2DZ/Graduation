import ProductDetailTop from "./ProductDetailTop/ProductDetailTop";
import ProductDetailMiddle from "./ProductMiddle/ProductMiddle";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://laptech4k.onrender.com/api/v1/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setSelectedVariant(data?.variants?.[0] || null);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu sản phẩm:", error);
      }
    };
    fetchProduct();
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center mt-6 min-h-[500px]">
        <svg className="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
        <span className="ml-2 text-blue-500">Loading...</span>
      </div>
    );
  }

  return (
    <div className="px-2 bg-[#F5F5F5]">      
      <div className="mb-6">
        <ProductDetailTop product={product} onVariantChange={setSelectedVariant}/>
      </div>
      <div className="mb-4">
        <ProductDetailMiddle product={product} selectedVariant={selectedVariant}/>
      </div>
    </div>
  );
}

export default ProductDetail;