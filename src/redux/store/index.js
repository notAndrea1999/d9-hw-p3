import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { encryptTransform } from "redux-persist-transform-encrypt";

import jobsReducer from "../reducer/jobsReducer";
import companyReducer from "../reducer/companyReducer";
import favouriteReducer from "../reducer/favouritesReducer";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
    }),
  ],
};

const rootReducers = combineReducers({
  jobs: jobsReducer,
  company: companyReducer,
  favourite: favouriteReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
