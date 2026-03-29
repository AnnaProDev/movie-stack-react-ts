import type { MoviesData } from "@/features/moviesApi/moviesApi.types";
import { MovieCard } from "@/components/MovieCard/MovieCard";
import s from "./MovieList.module.css";
import { MovieCardSkeleton } from "../MovieCard/MovieCardSkeleton";

type MovieListProps = {
	data: MoviesData[];
	columns?: number;
	isLoading?: boolean;
};

export const MovieList = ({ data, columns, isLoading }: MovieListProps) => {
	return (
		<ul
			className={s.grid}
			style={{ gridTemplateColumns: `repeat(${columns ?? 5}, 1fr)` }}
		>
			{isLoading
				? 	Array.from({ length: columns ?? 5 }).map((_, index) => (
						<MovieCardSkeleton key={index} />
					))
				: 
					data?.map((movie: MoviesData) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
		</ul>
	);
};
