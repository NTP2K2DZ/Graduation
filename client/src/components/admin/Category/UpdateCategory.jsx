/* eslint-disable react/prop-types */
import { useState, useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCategory } from "../../../features/Admin/adminCategorySlice";
import { getAllCategories } from "../../../features/category/categoriesSlice";

const UpdateCategory = ({ editCategory, onClose }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories); // Lấy danh sách danh mục từ Redux
  useEffect(() => {
    console.log("UpdateCate: ", categories)
  },[categories])
  const [error, setError] = useState(""); // State để lưu lỗi
  const [updatedCategory, setUpdatedCategory] = useState({
    name: "",
  });

  // Gán dữ liệu từ editCategory vào form khi mở modal
  useEffect(() => {
    if (editCategory) {
      setUpdatedCategory({
        name: editCategory.name || "",
      });
      setError(""); // Xóa lỗi cũ nếu có
    }
  }, [editCategory]);

  const duplicateCategory = useMemo(() => {
    return categories.find(
      (cat) =>
        cat.name.toLowerCase().trim() === updatedCategory.name.toLowerCase().trim() &&
        cat._id !== editCategory._id
    );
  }, [categories, updatedCategory.name, editCategory]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setUpdatedCategory((prev) => ({ ...prev, [name]: value }));
    setError(""); 
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      // Kiểm tra trùng tên danh mục
      // const duplicateCategory = categories.find(
      //   (cat) =>
      //     cat.name.toLowerCase().trim() === updatedCategory.name.toLowerCase().trim() && cat._id !== editCategory._id
      // );

      if (duplicateCategory) {
        setError("Danh mục đã tồn tại."); // Hiển thị lỗi nếu trùng
        return;
      }

      try {
        // Gửi yêu cầu cập nhật danh mục
        await dispatch(
          updateCategory({
            id: editCategory._id,
            editCategory: updatedCategory,
          })
        ).unwrap();

        dispatch(getAllCategories());
        onClose();
      } catch (error) {
        setError("Error edit category", error); // Hiển thị lỗi nếu cập nhật thất bại
      }
    },[duplicateCategory, dispatch, editCategory, updatedCategory, onClose]
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="mb-4 text-xl font-semibold tracking-wide">Cập nhật danh mục</h2>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium">Category Name</label>
          <input
            type="text"
            name="name"
            value={updatedCategory.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 focus:border-2 focus:border-blue-500 focus:outline-none rounded-md p-2"
            required
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update
        </button>
        <button
          onClick={onClose}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default UpdateCategory;
