import { useParams, useNavigate } from "react-router-dom";
import s from "./MovieDetails.module.css";
import {
	useGetMovieCreditsQuery,
	useGetMovieDetailsQuery,
	useGetSimilarMoviesQuery,
} from "@/features";
import noPhoto from "../../assets/actor-placeholder.webp";
import noPoster from "../../assets/poster-placeholder.webp";
import { MovieList } from "@/components";
import { getBadgeColor } from "@/utils";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export const MovieDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const { data } = useGetMovieDetailsQuery(id!);
	const { data: credits } = useGetMovieCreditsQuery(id!);
	const { data: similar, isLoading } = useGetSimilarMoviesQuery(id!);

	if (!data) return null;


	const runtime = `${Math.floor(data.runtime / 60)}h ${data.runtime % 60}m`;
	const year = new Date(data.release_date).getFullYear();
	const cast = credits?.cast.slice(0, 6) ?? [];

	return (
		<section className={s.section}>
			<div className={s.hero}>
				{data.poster_path ? (
					<img
						className={s.poster}
						src={`${IMAGE_BASE}${data.poster_path}`}
						alt={data.title}
					/>
				) : (
					<img className={s.poster} src={noPoster} alt="Poster not available" />
				)}

				<div className={s.info}>
					<h1 className={s.title}>{data.title}</h1>

					<div className={s.meta}>
						<span>Release year: {year}</span>
						<span className={s.rating} style ={{ backgroundColor: getBadgeColor(data.vote_average) }}>
							{data.vote_average.toFixed(1)}
						</span>
						<span>Runtime: {runtime}</span>
					</div>

					<p className={s.overview}>{data.overview}</p>

					<div className={s.genresTitle}>Genres</div>
					<div className={s.genres}>
						{data.genres.map((g: { id: number; name: string }) => (
							<span key={g.id} className={s.genre}>
								{g.name}
							</span>
						))}
					</div>
				</div>

				<button className={s.backBtn} onClick={() => navigate(-1)}>
					Back
				</button>
			</div>

			<div className={s.castSection}>
				<h2 className={s.sectionTitle}>Cast</h2>
				<div className={s.castList}>
					{cast.map((actor) => (
						<div key={actor.id} className={s.castCard}>
							{actor.profile_path ? (
								<img
									className={s.actorPhoto}
									src={`${IMAGE_BASE}${actor.profile_path}`}
									alt={actor.name}
								/>
							) : (
								<img
									className={s.actorPhoto}
									src={noPhoto}
									alt="Photo not available"
								/>
							)}
							<span className={s.actorName}>{actor.name}</span>
							<span className={s.actorCharacter}>{actor.character}</span>
						</div>
					))}
				</div>
			</div>

			<div className={s.similarSection}>
				<h2 className={s.sectionTitle}>Similar Movies</h2>
				<div className={s.similarList}>
					<MovieList
						data={(similar?.results ?? []).slice(0, 6)}
						columns={6}
						isLoading={isLoading}
					/>
				</div>
			</div>
		</section>
	);
};
