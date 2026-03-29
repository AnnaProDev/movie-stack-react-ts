import { CategoryPage } from "@/pages/CategoryPage/CategoryPage";
import { FavoritesPage } from "@/pages/FavoritesPage/FavoritesPage";
import { FilterPage } from "@/pages/FilterPage/FilterPage";
import { MainPage } from "@/pages/MainPage/MainPage";
import { MovieDetails } from "@/pages/MovieDetails/MovieDetails";
import { PageNotFound } from "@/pages/PageNotFound/PageNotFound";
import { SearchPage } from "@/pages/SearchPage/SearchPage";
import { Navigate, Route, Routes } from "react-router-dom";

export const Path = {
	Main: "/",
	Movies: "/movies/:category",
	MoviesDefault: "/movies",
	Filter: "/filter",
	Search: "/search",
	Favorites: "/favorites",
	Details: "/movie/:id",
	NotFound: "*",
} as const;

export const Routing = () => (
	<Routes>
		<Route path={Path.Main} element={<MainPage />} />
		<Route path={Path.MoviesDefault} element={<Navigate to="/movies/popular" replace />} />
		<Route path={Path.Movies} element={<CategoryPage />} />
		<Route path={Path.Filter} element={<FilterPage />} />
		<Route path={Path.Search} element={<SearchPage />} />
		<Route path={Path.Favorites} element={<FavoritesPage />} />
		<Route path={Path.Details} element={<MovieDetails />} />
		<Route path={Path.NotFound} element={<PageNotFound />} />
	</Routes>
);
