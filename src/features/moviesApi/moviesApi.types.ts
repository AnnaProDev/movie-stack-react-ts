import type { MovieCategory, SortBy } from "@/common/enums";
import type { ReactNode } from "react";

export type MoviesResponse = {
	genres: { id: number; name: string }[];
	overview: ReactNode;
	vote_average: number;
	poster_path: string | null;
	title: string | undefined;
	release_date: string | number | Date;
	runtime: number;
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

export type DiscoverMoviesParams = {
	page?: number;
	sort_by?: SortBy;
	vote_average__gte?: string; // Rating от
	vote_average__lte?: string; // Rating до
	with_genres?: string; // Жанры через запятую "28,12,16"
}

export type MovieCredits = {
   id: number;
   cast: MovieCastMember[];
   crew: MovieCrewMember[];
};

export type MovieCastMember = {
   id: number;
   name: string;
   original_name: string;
   character: string;
   profile_path: string | null;
   popularity: number;
   gender: number;
   adult: boolean;
   known_for_department: string;
   cast_id: number;
   credit_id: string;
   order: number;
};

export type MovieCrewMember = {
   id: number;
   name: string;
   original_name: string;
   department: string;
   job: string;
   profile_path: string | null;
   popularity: number;
   gender: number;
   adult: boolean;
   known_for_department: string;
   credit_id: string;
};
