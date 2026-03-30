import type { MovieCategory } from "@/common/enums";
import { MovieList } from "@/components";
import { useGetMoviesByCategoryQuery } from "@/features";
import s from "./MovieSection.module.css";
import { Link } from "react-router-dom";

type MovieSectionProps = {
	category: MovieCategory;
	title: string;
	link: string;
};

export const MovieSection = ({ category, title, link }: MovieSectionProps) => {
	const { data, isLoading } = useGetMoviesByCategoryQuery({
		category: category,
		page: 1,
	});

	return (
		<div>
			<div key={category} className={s.category}>
				<div className={s.categoryHeader}>
					<h3 className={s.categoryTitle}>{title}</h3>
					<Link to={`/movies/${link}`}>
						<button type="button" className={s.viewMoreButton}>
							View more
						</button>
					</Link>
				</div>

				<MovieList data={(data?.results ?? []).slice(0, 6)} columns={6} isLoading={isLoading} />
			</div>
		</div>
	);
};
