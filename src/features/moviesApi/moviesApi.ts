import { baseApi } from "@/app/api/baseApi";
import type { MovieCategoryList, MovieSearchList, MoviesResponse } from "./moviesApi.types";

export const moviesApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getMoviesByCategory: build.query<MoviesResponse, MovieCategoryList>({
			query: (body) => ({
				url: `movie/${body.category}`,
				params: {
					page: body.page,
				},
			}),
		}),
		searchMovies: build.query<MoviesResponse, MovieSearchList>({
			query: (body) => ({
				url: "search/movie",
				params: {
					query: body.searchTerm,
					page: body.page
				},
			}),
		}),
	}),
});

export const { useGetMoviesByCategoryQuery, useSearchMoviesQuery } = moviesApi;
