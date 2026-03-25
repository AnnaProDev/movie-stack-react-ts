import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import favoritesReducer from "./favoritesSlice";
import { baseApi } from "@/app/api/baseApi";


export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		theme: themeReducer,
		favorites: favoritesReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApi.middleware),
});



export type RootState = ReturnType<typeof store.getState>;