/* eslint-disable react/prop-types */
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const GeneralProductDown = ({data}) => {
    const [page, setPage] = useState(0);
    const [productsPerPage] = useState(10);

    const totalProducts = data.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const handlePageClick = (data) => {
        setPage(data.selected);
    };

    const indexOfLastProduct = (page + 1) * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className="border-none rounded-lg border opacity-100 bg-white w-full">
            <div className="border-b border-b-[#EAEAEA] border-t-0 border-x-0 opacity-100 flex flex-row gap-0 items-baseline w-full h-[64px] rounded-t-lg justify-between text-[14px]">
                <div className="border border-transparent opacity-100 h-full pl-4 flex flex-row gap-0 justify-center items-center">
                    <div className="mr-8 p-0 border border-transparent opacity-100 text-inherit font-medium text-sm leading-6 overflow-hidden transition-colors duration-300">
                        Sắp xếp theo
                    </div>
                    <div className="mr-4 p-2 rounded border border-gray-300 bg-white relative overflow-hidden cursor-pointer select-non">
                        <div className="m-0 p-0 border border-transparent opacity-100 text-inherit font-normal text-[13px] leading-5 overflow-hidden transition-colors duration-300">
                            Khuyến mãi tốt nhất
                        </div>
                    </div>
                    <div className="mr-4 p-2 rounded border border-gray-300 bg-white relative overflow-hidden cursor-pointer select-non">
                        <div className="m-0 p-0 border border-transparent opacity-100 text-inherit font-normal text-[13px] leading-5 overflow-hidden transition-colors duration-300">
                            Giá tăng dần
                        </div>
                    </div>
                    <div className="mr-4 p-2 rounded border border-gray-300 bg-white relative overflow-hidden cursor-pointer select-non">
                        <div className="m-0 p-0 border border-transparent opacity-100 text-inherit font-normal text-[13px] leading-5 overflow-hidden transition-colors duration-300">
                            Giá giảm dần
                        </div>
                    </div>
                    <div className="mr-4 p-2 rounded border border-gray-300 bg-white relative overflow-hidden cursor-pointer select-non">
                        <div className="m-0 p-0 border border-transparent opacity-100 text-inherit font-normal text-[13px] leading-5 overflow-hidden transition-colors duration-300">
                            Sản phẩm mới nhất
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-0.5 justify-start bg-[#F6F6F6] py-0.5">
                {currentProducts.map((product) => (
                    <div key={product.id} className="bg-white mb-[2px] w-[calc(20%-1.7px)]">
                        <div className="relative w-full h-full p-4 flex flex-col bg-white justify-between">
                            <a className="no-underline text-transparent cursor-pointer block">
                                <div className="relative mb-2">
                                    <div className="relative mb-1">
                                        <div className="relative pb-[100%]">
                                            <div className="inline-block overflow-hidden h-full w-full transition-transform duration-300 absolute inset-0 object-contain">
                                                <img 
                                                    className="absolute top-0 left-0 w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                                                    loading="lazy"
                                                    decoding="async"
                                                    alt={product.name}
                                                    src={product.image}
                                                >
                                                </img>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0">
                                            <div 
                                                className="h-9 leading-3 flex flex-col justify-center 
                                                            bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA5NiA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iOTYiIGhlaWdodD0iNDAiIHJ4PSI0IiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIiAvPgogIDxtYXNrIGlkPSJtYXNrMCIgbWFzay10eXBlPSJhbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9Ijk2IiBoZWlnaHQ9IjQwIj4KICAgIDxyZWN0IHdpZHRoPSI5NiIgaGVpZ2h0PSI0MCIgcng9IjQiIGZpbGw9IndoaXRlIiAvPgogIDwvbWFzaz4KICA8ZyBtYXNrPSJ1cmwoI21hc2swKSI+CiAgICA8cGF0aCBvcGFjaXR5PSIwLjMiCiAgICAgIGQ9Ik07NC4yNDQ2IC05LjAyODY5TDY1Ljg3NjcgOC45MTYyMUw3MC43NzA4IDExLjE5ODNMNjMuOTI0NCAyNS44ODA1TDg0LjQ3MjQgMTEuNjI5M0w3Ny45NDcgOC41ODY0Mkw5MC41NTgxIC0xLjQyMTU2TDc0LjI0NDYgLTkuMDI4NjlaIgogICAgICBmaWxsPSIjMUIxRDI5IiAvPgogIDwvZz4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjM1LjcyMDkiIHkxPSIxLjY2NTQ0ZS0wNiIgeDI9IjU3Ljg4ODYiIHkyPSI0MC4wODczIgogICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNBQTIwRkYiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzQxM0VGRiIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgo8L3N2Zz4=')] 
                                                            bg-cover bg-no-repeat p-1 px-2 rounded-sm"
                                            >
                                                <div className="text-[10px] font-bold text-[#FFD591] uppercase">
                                                    tiết kiệm
                                                </div>
                                                <div className="text-[13px] leading-[18px] font-bold text-white">
                                                    {product.save} đ
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-1">
                                        <div className="uppercase inline m-0 p-0 border-none opacity-100 text-[#82869e] font-medium no-underline text-[13px] leading-[20px] overflow-hidden line-clamp-1 transition-colors duration-300">
                                            {product.name}
                                        </div>
                                    </div>
                                    <div className="h-12">
                                        <div className="m-0 p-0 border-none border-[1px] border-transparent opacity-100 text-[rgb(67,70,87)] font-normal no-underline text-[12px] leading-[16px] overflow-hidden max-w-none min-w-0 transition-colors duration-300 line-clamp-3">
                                            <h3 title="Laptop gaming Lenovo LOQ 15IAX9 - 83GS004BVN (i5-12450HX/RAM 12GB/GeForce RTX 3050/512GB SSD/ Windows 11)" className="text-[0.75rem] font-normal leading-[1rem] inline">
                                                {product.description}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="relative mt-1 mb-1 pr-0">
                                        <div className="flex flex-col items-start h-10">
                                            <div className="m-0 p-0 border-none border-[1px] border-transparent opacity-100 text-[rgb(20,53,195)] font-bold no-underline text-[15px] leading-[24px] overflow-hidden max-w-none min-w-0 transition-colors duration-300">
                                                {product.price} đ
                                            </div>
                                            <div className="flex h-4">
                                                <div className="m-0 mb-0 mr-1 p-0 border-none border-[1px] border-transparent opacity-100 text-[rgb(130,134,158)] font-normal text-[12px] leading-[16px] overflow-hidden max-w-none min-w-0 transition-colors duration-300 line-through">
                                                    {product.oldPrice} đ
                                                </div>
                                                <div className="m-0 p-0 border-none border-[1px] border-transparent opacity-100 text-[rgb(20,53,195)] font-normal no-underline text-[12px] leading-[16px] overflow-hidden max-w-none min-w-0 transition-colors duration-300">
                                                    -{product.discount}%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <button 
                                type="button" 
                                className="opacity-100 h-8 p-0 rounded-md bg-white border border-[rgb(20,53,195)] relative flex items-center justify-center outline-none min-w-[2rem] text-[rgb(20,53,195)] w-full cursor-pointer transition-colors duration-80"
                            >
                                <div className="m-0 p-0 border-none border-[1px] border-transparent opacity-100 text-[rgb(20,53,195)] font-medium no-underline text-[13px] leading-[20px] overflow-hidden max-w-none min-w-0 transition-colors duration-300">
                                    Thêm vào giỏ
                                </div>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="border-none border border-transparent opacity-100 mt-4">
                <div className="border-0 border-opacity-100 w-full text-center">
                    <div className="inline-flex">
                        <ReactPaginate
                        previousLabel={<FontAwesomeIcon icon={faChevronLeft} size="xs" />}
                        nextLabel={<FontAwesomeIcon icon={faChevronRight} size="xs" />}
                        pageCount={totalPages}
                        onPageChange={handlePageClick}
                        containerClassName={"flex items-center space-x-2"}
                        previousLinkClassName={"w-8 h-8 flex items-center justify-center bg-white border rounded shadow hover:bg-gray-100"}
                        nextLinkClassName={"w-8 h-8 flex items-center justify-center bg-white border rounded shadow hover:bg-gray-100"}
                        disabledClassName={"text-blue-500"}
                        activeLinkClassName={"bg-blue-500 text-white rounded w-8 h-8 flex items-center justify-center hover:bg-blue-600"}
                        pageClassName={"w-8 h-8 flex items-center justify-center bg-white border rounded shadow hover:bg-gray-100"}
                        pageLinkClassName={"w-full h-full flex items-center justify-center focus:outline-none"}
                        breakLabel={"..."}
                        breakClassName={"w-8 h-8 flex items-center justify-center text-gray-500"} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default GeneralProductDown;