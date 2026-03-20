import type { MoviesData } from "@/features/movies/moviesApi.types";
import { MovieCard } from "@/components/MovieCard/MovieCard";
import s from "./MovieList.module.css";
import type { MovieCategory } from "@/common/types/types";
import { useGetMoviesByCategoryQuery } from "@/features/movies/moviesApi";

type MovieListProps = {
	tab: string;
	category: MovieCategory;
};

export const MovieList = ({ category, tab }: MovieListProps) => {

	const { data, isLoading, isError } = useGetMoviesByCategoryQuery(category);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading movies</div>;
	
	return (
		<>
			<div>
				<div className={s.header}>
					<h2 className={s.title}>{tab}</h2>
				</div>
				<ul className={s.grid}>
					{data?.results.map((movie: MoviesData) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</ul>
			</div>

			<div className={s.container}>
				<div className={s.pagination}></div>
			</div>
		</>
	);
};
