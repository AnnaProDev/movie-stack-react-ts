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