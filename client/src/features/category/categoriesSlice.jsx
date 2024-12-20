import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/apiConfig";

// Thunk để gọi API lấy danh mục theo ID
export const getCategoryById = createAsyncThunk(
  "category/getCategoryById",
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/admin/products/category/${categoryId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Lấy danh sách tất cả danh mục
export const getAllCategories = createAsyncThunk(
  "category/getAllCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/admin/products/category");
      // console.log("DataCategory: ",response)
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // Trả về mảng rỗng nếu lỗi 404
        return [];
      }
      // Các lỗi khác được xử lý bình thường
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Trạng thái khi đang tải danh mục
      .addCase(getAllCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Trạng thái khi tải danh mục thành công
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      // Trạng thái khi tải danh mục thất bại
      .addCase(getAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }); 
  },
});

export default categorySlice.reducer;
