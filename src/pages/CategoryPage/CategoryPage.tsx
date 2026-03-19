import { useGetPopularMoviesQuery } from "@/features/movies/moviesApi";
import s from "./CategoryPage.module.css";
import type { MoviesData } from "@/features/movies/moviesApi.types";


export const CategoryPage = () => {
	const { data } = useGetPopularMoviesQuery();

	console.log(data);

	return (
		<section className={s.section}>
			<div className={s.header}>
				<h2 className={s.title}>Filters / Sort</h2>
			</div>

			<div>
				{data ? (
					<>
						<ul className={s.grid}>
							{data.results.map((movie: MoviesData) => (
								<li className={s.card} key={movie.id}>
									<div className={s.posterFrame}>
										<a
											className={s.posterLink}
											href={`https://www.themoviedb.org/movie/${movie.id}`}
										>
											<img
												src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
												alt={movie.title}
												className={s.posterImg}
											/>
											<span className={s.badge}>
												{movie.vote_average.toFixed(1)}
											</span>
										</a>
									</div>
									<a href={`https://www.themoviedb.org/movie/${movie.id}`}>
										<h3 className={s.cardTitle}>{movie.title}</h3>
									</a>
								</li>
							))}
						</ul>
					</>
				) : null}
			</div>

			<div className={s.container}>
				<div className={s.pagination}>
				</div>
			</div>
		</section>
	);
};
