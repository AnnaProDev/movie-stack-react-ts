import s from "./CategoryPage.module.css";
import { useState } from "react";
import { MovieList, Pagination } from "@/components";
import type { MovieCategory } from "@/common/enums";
import { useGetMoviesByCategoryQuery } from "@/features";
import { useNavigate, useParams } from "react-router-dom";
import { MOVIE_TABS, type TabItem  } from "@/common/constants";


export const CategoryPage = () => {
	const { category } = useParams<{ category: MovieCategory }>();
	const navigate = useNavigate();

	const activeTab = MOVIE_TABS.find((t) => t.link === category) ?? MOVIE_TABS[0];

	const [currentPage, setCurrentPage] = useState(1);

	const { data, isLoading } = useGetMoviesByCategoryQuery({
		category: activeTab.value,
		page: currentPage,
	});

	const handleTabClick = (tab: TabItem) => {
		navigate(`/movies/${tab.link}`);
		setCurrentPage(1);
	};

	return (
		<section className={s.section}>
			<div className={s.tabs}>
				{MOVIE_TABS.map((tab) => (
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
