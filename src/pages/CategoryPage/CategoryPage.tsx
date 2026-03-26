import s from "./CategoryPage.module.css";
import { useState } from "react";
import { MovieList } from "@/components/MovieList/MovieList";
import type { MovieCategory } from "@/common/enums";
import { useGetMoviesByCategoryQuery } from "@/features/moviesApi/moviesApi";
import { Loading } from "@/components/Loading/Loading";
import { Pagination } from "@/components/Pagination/Pagination";
import { toast } from "react-toastify/unstyled";

export const CategoryPage = () => {
	const tabs: { label: string; value: MovieCategory }[] = [
		{ label: "Popular Movies", value: "popular" },
		{ label: "Top Rated Movies", value: "top_rated" },
		{ label: "Upcoming Movies", value: "upcoming" },
		{ label: "Now Playing Movies", value: "now_playing" },
	];

	const [active, setActive] = useState(tabs[0]);
	const [currentPage, setCurrentPage] = useState(1);

	const { data, isLoading, isError } = useGetMoviesByCategoryQuery({
		category: active.value,
		page: currentPage,
	});

	const handleTabClick = (tab: typeof tabs[0]) => {
		setActive(tab);
		setCurrentPage(1); 
	}

	if (isLoading) return <Loading />;
	if (isError) return toast('Something went wrong', { type: 'error', theme: 'colored' });

	return (
		<section className={s.section}>
			<div className={s.tabs}>
				{tabs.map((tab) => (
					<button
						key={tab.value}
						className={`${s.tab} ${active.value === tab.value ? s.active : ""}`}
						onClick={() => handleTabClick(tab)}
					>
						{tab.label}
					</button>
				))}
			</div>
			<div className={s.header}>
				<h2 className={s.title}>{active.label}</h2>
			</div>
			<MovieList data={data?.results ?? []} />
			<div className={s.container}>
				<div className={s.pagination}>
					<Pagination
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						pagesCount={data?.total_pages || 1}
					/>
				</div>
			</div>
		</section>
	);
};
