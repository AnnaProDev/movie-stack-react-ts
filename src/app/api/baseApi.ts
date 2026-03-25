import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
	reducerPath: "moviesApi",
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_BASE_URL,
		prepareHeaders: (headers) => {
			headers.set(
				"Authorization",
				`Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
			);
			return headers;
		},
	}),
	endpoints: () => ({}),
});
