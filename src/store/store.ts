import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "../features/movies/moviesApi";
import themeReducer from "./themeSlice";

export const store = configureStore({
	reducer: {
		[moviesApi.reducerPath]: moviesApi.reducer,
		theme: themeReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(moviesApi.middleware),
});



export type RootState = ReturnType<typeof store.getState>;