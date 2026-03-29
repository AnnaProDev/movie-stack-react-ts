import { baseApi } from "@/app/api/baseApi";
import type {
	DiscoverMoviesParams,
	MovieCategoryList,
	MovieCredits,
	MovieSearchList,
	MoviesResponse,
} from "./moviesApi.types";

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
		getSearchMovies: build.query<MoviesResponse, MovieSearchList>({
			query: (body) => ({
				url: "search/movie",
				params: {
					query: body.searchTerm,
					page: body.page,
				},
			}),
		}),
		getFilterMovies: build.query<MoviesResponse, DiscoverMoviesParams>({
			query: (body) => ({
				url: "discover/movie",
				params: {
					...body,
					page: body.page,
				},
			}),
		}),
		getMovieDetails: build.query<MoviesResponse, string>({
			query: (id) => ({
				url: `movie/${id}`,
			}),
		}),
		getMovieCredits: build.query<MovieCredits, string>({
			query: (id) => ({
				url: `movie/${id}/credits`,
			}),
		}),
	}),
});

export const {
	useGetMoviesByCategoryQuery,
	useGetSearchMoviesQuery,
	useGetFilterMoviesQuery,
	useGetMovieDetailsQuery,
	useGetMovieCreditsQuery,
} = moviesApi;
