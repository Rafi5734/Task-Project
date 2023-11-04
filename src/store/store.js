import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userListSlice } from "../apiSlice/userApiSlice/UserApiSlice";
import authReducer from "../apiSlice/userApiSlice/AuthSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    [userListSlice.reducerPath]: userListSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userListSlice.middleware),
});
setupListeners(store.dispatch);
