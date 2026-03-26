import type { MoviesData } from "@/features/moviesApi/moviesApi.types";
import s from "./MovieCard.module.css";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/store/store";
import { toggleFavorite } from "@/store/favoritesSlice";
import noPoster from "../../assets/poster-placeholder.webp";

type Props = {
	movie: MoviesData;
};

export const MovieCard = ({ movie }: Props) => {
	const dispatch = useDispatch();
	const favorites = useSelector((state: RootState) => state.favorites.movies);
	const isFavorite = favorites.some((m) => m.id === movie.id);

	const getBadgeColor = (rating: number) => {
		if (rating >= 7) return s.high;
		if (rating >= 5) return s.medium;
		return s.low;
	};

	return (
		<li className={s.card}>
			<div className={s.posterFrame}>
				<a
					className={s.posterLink}
					href={`https://www.themoviedb.org/movie/${movie.id}`}
				>
					{movie.poster_path ? (
						<img
							src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
							alt={movie.title}
							className={s.posterImg}
						/>
					) : (
						<img
							src={noPoster}
							alt={movie.title}
							className={s.posterImg}
						/>
					)}
					<span className={`${s.badge} ${getBadgeColor(movie.vote_average)}`}>
						{movie.vote_average.toFixed(1)}
					</span>
				</a>
				<button
					type="button"
					className={s.favoriteButton}
					aria-pressed={isFavorite}
					aria-label="Add to favorites"
					title="Add to favorites"
					onClick={() => dispatch(toggleFavorite(movie))}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						aria-hidden="true"
						focusable="false"
						className={s.favoriteIcon}
					>
						<path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.77-3.4 6.86-8.55 11.54L12 21.35z"></path>
					</svg>
				</button>
			</div>
			<a href={`https://www.themoviedb.org/movie/${movie.id}`}>
				<h3 className={s.cardTitle}>{movie.title}</h3>
			</a>
		</li>
	);
};
