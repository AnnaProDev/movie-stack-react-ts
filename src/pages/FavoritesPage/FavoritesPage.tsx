import s from "./FavoritesPage.module.css";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { MovieList } from "@/components/MovieList/MovieList";

export const FavoritesPage = () => {
	const favorites = useSelector((state: RootState) => state.favorites.movies);

	return (
		<section className={s.section}>
			<div className={s.header}>
				<h2 className={s.title}>Favorites Movies</h2>
			</div>
			{favorites.length === 0 ? (
				<div className={s.emptyMessage}>Add movies to favorites to see them on this page.</div>
			) : (
				<MovieList data={favorites}/>
			)}
		</section>
	);
};
