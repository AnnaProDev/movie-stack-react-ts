import type { MoviesData } from "@/features/moviesApi/moviesApi.types";
import { MovieCard } from "@/components/MovieCard/MovieCard";
import s from "./MovieList.module.css";

type MovieListProps = {
	data: MoviesData[];
	columns?: number;
};

export const MovieList = ({ data, columns }: MovieListProps) => {
	return (
		<>
			<ul className={s.grid} style={{ gridTemplateColumns: `repeat(${columns ?? 5}, 1fr)` }}>
				{data?.map((movie: MoviesData) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</ul>
		</>
	);
};
