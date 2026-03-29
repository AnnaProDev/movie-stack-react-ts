import s from "./CategoryPage.module.css";
import { useState } from "react";
import { MovieList } from "@/components/MovieList/MovieList";
import type { MovieCategory } from "@/common/enums";
import { useGetMoviesByCategoryQuery } from "@/features/moviesApi/moviesApi";
import { Pagination } from "@/components/Pagination/Pagination";
import { useNavigate, useParams } from "react-router-dom";

const tabs: { label: string; value: MovieCategory }[] = [
	{ label: "Popular Movies", value: "popular" },
	{ label: "Top Rated Movies", value: "top_rated" },
	{ label: "Upcoming Movies", value: "upcoming" },
	{ label: "Now Playing Movies", value: "now_playing" },
];

export const CategoryPage = () => {
	const { category } = useParams<{ category: MovieCategory }>();
	const navigate = useNavigate();

	const activeTab = tabs.find((t) => t.value === category) ?? tabs[0];

	const [currentPage, setCurrentPage] = useState(1);

	const { data, isLoading } = useGetMoviesByCategoryQuery({
		category: activeTab.value,
		page: currentPage,
	});

	const handleTabClick = (tab: (typeof tabs)[0]) => {
		navigate(`/movies/${tab.value}`);
		setCurrentPage(1);
	};

	return (
		<section className={s.section}>
			<div className={s.tabs}>
				{tabs.map((tab) => (
					<button
						key={tab.value}
						className={`${s.tab} ${activeTab.value === tab.value ? s.active : ""}`}
						onClick={() => handleTabClick(tab)}
					>
						{tab.label}
					</button>
				))}
			</div>
			<div className={s.header}>
				<h2 className={s.title}>{activeTab.label}</h2>
			</div>
			<MovieList data={data?.results ?? []} isLoading={isLoading} />
			<div className={s.pagination}>
				<Pagination
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					pagesCount={data?.total_pages || 1}
				/>
			</div>
		</section>
	);
};
