import { configureStore } from "@reduxjs/toolkit";
import adminProductReducer from "../features/Admin/adminProductsSlice";
import adminCategoryReducer from "../features/Admin/adminCategorySlice";
import adminBrandReducer from "../features/Admin/adminBrandSlice";
import productReducer from "../features/product/productsSlice";
import brandReducer from "../features/brand/brandsSlice";
import categoryReducer from "../features/category/categoriesSlice";
import productVariationReducer from "../features/product/productVariationSlice";
import adminVariationReducer from "../features/Admin/adminVariationsSlice";
import cartReducer from "../features/cart/cartSlice";
import orderReducer from "../features/order/orderSlice";
import userReducer from "../features/user/userSlice"
import authReducer from "../features/Auth/authSlice";
import authProfileReducer from "../features/Auth/authProfileSlice";
import authOrdersUserReducer from "../features/Auth/authOrdersUserSlice";
import statsReducer from "../features/Admin/statistical"

export const store = configureStore({
  reducer: {
    productVariation: productVariationReducer,
    brand: brandReducer,
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
    order: orderReducer,
    user: userReducer,
    adminProduct: adminProductReducer,
    adminVariation: adminVariationReducer,
    adminCategory: adminCategoryReducer,
    adminBrand: adminBrandReducer,
    auth: authReducer,
    profile: authProfileReducer,
    ordersUser: authOrdersUserReducer,
    stats: statsReducer,
  },
});

// import { configureStore } from "@reduxjs/toolkit";
// import adminProductReducer from "../features/Admin/adminProductsSlice";
// import brandReducer from "../features/brand/brandsSlice";
// import categoryReducer from "../features/Category/categoriesSlice";
// import useCaseReducer from "../features/usecase/usecaseSlice";
// import productVariationReducer from "../features/product/productVariationSlice";
// import typeReducer from "./../stores/slices/typeSlice";
// import productReducer from "../stores/slices/producSlice";
// import { productApi } from "../stores/query/productQuery"; // Import API slice

// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // Sử dụng localStorage

// // Cấu hình persist
// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["brand", "usecase"],
// };

// const persistedQueryReducer = persistReducer(persistConfig, productReducer);

// // Cấu hình store
// export const store = configureStore({
//   reducer: {
//     productVariation: productVariationReducer,
//     useCase: useCaseReducer,
//     brand: brandReducer,
//     category: categoryReducer,
//     adminProduct: adminProductReducer,
//     type: typeReducer,
//     query: persistedQueryReducer,
//     [productApi.reducerPath]: productApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }).concat(productApi.middleware),
// });

// // Khởi tạo persistor
// export const persistor = persistStore(store);