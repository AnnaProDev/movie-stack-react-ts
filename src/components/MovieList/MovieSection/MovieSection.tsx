import type { MovieCategory } from "@/common/enums";
import { MovieList } from "../MovieList";
import { useGetMoviesByCategoryQuery } from "@/features/moviesApi/moviesApi";
import s from "./MovieSection.module.css";
import { Link } from "react-router-dom";

type MovieSectionProps = {
	category: MovieCategory;
	title: string;
};

export const MovieSection = ({ category, title }: MovieSectionProps) => {
	const { data } = useGetMoviesByCategoryQuery({
		category: category,
		page: 1,
	});

	return (
		<div>
			<div key={category} className={s.category}>
				<div className={s.categoryHeader}>
					<h3 className={s.categoryTitle}>{title}</h3>
					<Link to={`/movies`}>
						{" "}
						<button type="button" className={s.viewMoreButton}>
							View more
						</button>
					</Link>
				</div>

				<MovieList data={(data?.results ?? []).slice(0, 6)} columns={6} />
			</div>
		</div>
	);
};
