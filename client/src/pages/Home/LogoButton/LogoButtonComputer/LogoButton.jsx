import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBrandName } from "../../../../features/Client/ClientFilterSlice";

export default function LogonButtonComputer() {
  const dispatch = useDispatch();
  const [logos, setLogos] = useState([]);

  // Gọi API khi component được mount
  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await fetch("https://laptech4k.onrender.com/api/v1/products/brand");
        const data = await response.json();
        setLogos(data?.brands || []); // Đảm bảo có dữ liệu hợp lệ
      } catch (error) {
        console.error("Error fetching logos:", error);
      }
    };

    fetchLogos();
  }, []);

  const handleProductClick = (brandName) => {
    dispatch(setBrandName(brandName));
  };

  return (
    <div className="">
      <div className="max-w-[1100px] mx-auto">
        <div>
          <h2 className="text-[24px] font-bold my-[20px] mx-[10px]">Laptop - Máy tính xách tay</h2>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {logos.map((logo, index) => (
            <Link
              key={index}
              to={{
                pathname: "/productList",
                search: `?brandName=${logo.name}`,
              }
                // `/productList?brandName=${logo.name}`
                }
                state={{ from: "LogoButton" }}
              onClick={() => handleProductClick(logo.name)}
              className="flex-shrink-0 p-2 border rounded-md bg-white shadow-md hover:shadow-lg max-w-[120px] max-h-[38.49px]"
              style={{ flexBasis: 'calc(25% - 0.5rem)' }}
            >
              <img src={logo.image} alt={logo.name} className="w-full" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
