import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { MoviesResponse } from "./moviesApi.types";
import type { MovieCategory } from "@/common/enums";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    getMoviesByCategory: build.query<MoviesResponse, MovieCategory>({
      query: (category) => ({
        url: `movie/${category}`, 
      }),
    }),
  }),
});

export const { useGetMoviesByCategoryQuery } = moviesApi;
