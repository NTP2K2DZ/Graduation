import { useState } from "react";

export default function ProductDetailMiddle() {
  const [productDetails, setProductDetails] = useState({
    brand: "Apple",
    warranty: "12 months",
    color: "Silver",
    usage: "Business",
    cpu: "Intel Core i7",
    ram: "16GB",
    screen: "15.6 inch Retina",
    abb: "CCCC"
  });

  const labels = [
    "Thương hiệu",
    "Bảo hành",
    "Màu sắc",
    "Nhu cầu",
    "CPU",
    "RAM",
    "Màn hình",
    "Abb"
  ];


  const values = [
    productDetails.brand,
    productDetails.warranty,
    productDetails.color,
    productDetails.usage,
    productDetails.cpu,
    productDetails.ram,
    productDetails.screen,
    productDetails.abb,
  ];

  return (
      <div id="product-detail-middle" className="flex justify-center mx-auto">
      <div className="flex w-full max-w-[1100px] h-[420px] flex-nowrap rounded bg-white mb-4">
        <div className="w-[60%] flex-shrink-0 pl-[5px]">
          <div className="h-[56px] flex px-4">
            <div className="py-4 font-bold text-[20px]">
              Mô tả sản phẩm
            </div>
          </div>
          <div className="p-4">
            <div className="text-[14px]">Đang cập nhật...</div>
          </div>

        </div>
        <div className="w-[40%] flex-grow min-w-0 h-full overflow-hidden mx-[10px]">
        <div className="h-[56px] flex px-4">
            <div className="py-4 font-bold text-[20px]">
              Mô tả sản phẩm
            </div>
          </div>
          <div className="p-4">
            {labels.map((label, index) => (
              <div key={index}>
                {index === 2 && (
                  <div className="text-[13px] w-full bg-blue-100 text-center py-2 px-4 font-bold">
                    Thông tin chung
                  </div>
                )}

                <div
                  className={`text-[13px] flex py-2 px-4 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <div className="h-[30%] flex-grow-2 flex-shrink-1 basis-0">{label}</div>
                  <div className="h-[70%] flex-grow-3 flex-shrink-1 basis-0">{values[index]}</div>
                </div>

                {index === 5 && (
                  <div className="text-[13px] w-full bg-blue-100 text-center py-2 px-4 font-bold">
                    Cấu hình chi tiết
                  </div>
                )}
              </div>
            ))}
          </div>  
        </div>
      </div>
    </div>
  )
}