import type { MoviesData } from "@/features/moviesApi/moviesApi.types";
import { MovieCard } from "@/components/MovieCard/MovieCard";
import s from "./MovieList.module.css";

type MovieListProps = {
	data: MoviesData[] | undefined;
};

export const MovieList = ({ data }: MovieListProps) => {
	return (
		<>
			<div>
				<ul className={s.grid}>
					{data?.map((movie: MoviesData) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</ul>
			</div>

			<div className={s.container}>
				<div className={s.pagination}>1 2 3</div>
			</div>
		</>
	);
};
