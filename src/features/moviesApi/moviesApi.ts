import { baseApi } from "@/app/api/baseApi";
import type { MoviesResponse } from "./moviesApi.types";
import type { MovieCategory } from "@/common/enums";

export const moviesApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getMoviesByCategory: build.query<MoviesResponse, MovieCategory>({
			query: (category) => ({
				url: `movie/${category}`,
			}),
		}),
		searchMovies: build.query<MoviesResponse, string>({
			query: (searchTerm) => ({
				url: "search/movie",
				params: {
					query: searchTerm,
				},
			}),
		}),
	}),
});

export const { useGetMoviesByCategoryQuery, useSearchMoviesQuery } = moviesApi;
