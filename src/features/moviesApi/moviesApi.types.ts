import type { MovieCategory } from "@/common/enums";

export type MoviesResponse = {
	results: MoviesData[];
	page: number;
	total_pages: number;
	total_results: number;
};

export type MoviesData = {
	id: number;
	title: string;
	popularity: number;
	overview: string;
	poster_path: string | null;
	backdrop_path?: string | null;
	release_date: string;
	vote_average: number;
};

export type MovieCategoryList = {
	category: MovieCategory;
	page: number;
};

export type MovieSearchList = {
	searchTerm: string;
	page: number;
};

export type SortBy =
	| "popularity.desc"
	| "popularity.asc"
	| "vote_average.desc"
	| "vote_average.asc"
	| "primary_release_date.desc"
	| "primary_release_date.asc"
	| "title.asc"
	| "title.desc";

export interface DiscoverMoviesParams {
	page?: number;
	sort_by?: SortBy;
	vote_average__gte?: string; // Rating от
	vote_average__lte?: string; // Rating до
	with_genres?: string; // Жанры через запятую "28,12,16"
}
