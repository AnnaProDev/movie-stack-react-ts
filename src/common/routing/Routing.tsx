import { Navigate, Route, Routes } from "react-router-dom";
import { CategoryPage, FavoritesPage, FilterPage, MainPage, MovieDetails, PageNotFound, SearchPage } from "@/pages";
import { PATH } from "@/common/constants/path";


export const Routing = () => (
	<Routes>
		<Route path={PATH.Main} element={<MainPage />} />
		<Route path={PATH.MoviesDefault} element={<Navigate to="/movies/popular" replace />} />
		<Route path={PATH.Movies} element={<CategoryPage />} />
		<Route path={PATH.Filter} element={<FilterPage />} />
		<Route path={PATH.Search} element={<SearchPage />} />
		<Route path={PATH.Favorites} element={<FavoritesPage />} />
		<Route path={PATH.Details} element={<MovieDetails />} />
		<Route path={PATH.NotFound} element={<PageNotFound />} />
	</Routes>
);
