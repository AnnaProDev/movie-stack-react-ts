import s from "./CategoryPage.module.css";
import { useState } from "react";
import { MovieList } from "@/components/MovieList/MovieList";
import type { MovieCategory } from "@/common/types/types";

export const CategoryPage = () => {
	const tabs: { label: string; value: MovieCategory }[] = [
		{ label: "Popular Movies", value: "popular" },
		{ label: "Top Rated Movies", value: "top_rated" },
		{ label: "Upcoming Movies", value: "upcoming" },
		{ label: "Now Playing Movies", value: "now_playing" },
	];

	const [active, setActive] = useState(tabs[0]);

	return (
		<section className={s.section}>
			<div className={s.tabs}>
				{tabs.map((tab) => (
					<button
						key={tab.value}
						className={`${s.tab} ${active.value === tab.value ? s.active : ""}`}
						onClick={() => setActive(tab)}
					>
						{tab.label}
					</button>
				))}
			</div>

			<MovieList tab={active.label} category={active.value} />

		</section>
	);
};
