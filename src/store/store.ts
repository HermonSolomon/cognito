import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSlice from "./cartSlice/cartSlice";
import productSlice from "./productSlice/productSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["products"],
};

// Combine your reducers using combineReducers
export const rootReducer = combineReducers({
  cart: cartSlice,
  grocery: productSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializableCheck for redux-persist compatibility
    }),
});

const persistor = persistStore(store);

export { store, persistor };
