// Во избежание ошибок импорт должен быть из `@reduxjs/toolkit/query/react`
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { MoviesResponse } from "./moviesApi.types";

export const moviesApi = createApi({
	reducerPath: "moviesApi",

	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_BASE_URL,
		headers: {
			Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
			accept: "application/JSON",
		},
	}),
	endpoints: (build) => ({
		getPopularMovies: build.query<MoviesResponse, void>({
			query: () => {
				return {
					method: "get",
					url: "movie/popular",
				};
			},
		}),
	}),
});

// `createApi` создает объект `API`, который содержит все эндпоинты в виде хуков,
// определенные в свойстве `endpoints`
export const { useGetPopularMoviesQuery } = moviesApi;
