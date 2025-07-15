import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import storage from "redux-persist/lib/storage"; // localStorage
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

// Configuration for redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // only persist cart
};

// Combine reducers if you have more later
const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
