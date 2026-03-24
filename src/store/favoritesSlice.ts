import type { MoviesData } from "@/features/movies/moviesApi.types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const loadFavorites = (): MoviesData[] => {
	return JSON.parse(localStorage.getItem("favorites") || "[]");
};

export const favoritesSlice = createSlice({
	name: "favorites",
	initialState: { movies: loadFavorites() },
	reducers: {
		toggleFavorite: (state, action: PayloadAction<MoviesData>) => {
			const exists = state.movies.some(
				(m: MoviesData) => m.id === action.payload.id,
			);
			if (exists) {
				state.movies = state.movies.filter((m) => m.id !== action.payload.id);
			} else {
				state.movies = [...state.movies, action.payload];
			}
			localStorage.setItem("favorites", JSON.stringify(state.movies));
		},
	},
});

// Action creators are generated for each case reducer function
export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
