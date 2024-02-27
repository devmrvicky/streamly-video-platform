import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./features";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import
const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
export default store;
