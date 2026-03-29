export type MovieCategory = "popular" | "top_rated" | "upcoming" | "now_playing" | "favorites";

export type SortBy =
	| "popularity.desc"
	| "popularity.asc"
	| "vote_average.desc"
	| "vote_average.asc"
	| "primary_release_date.desc"
	| "primary_release_date.asc"
	| "title.asc"
	| "title.desc";