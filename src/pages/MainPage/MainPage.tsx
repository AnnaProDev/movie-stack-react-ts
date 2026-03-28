import s from "./MainPage.module.css";
import { SearchForm } from "../SearchPage/SearchForm/SearchForm";
import type { MovieCategory } from "@/common/enums/enums";
import { MovieSection } from "@/components/MovieList/MovieSection/MovieSection";

export const MainPage = () => {
	const tabs: { label: string; value: MovieCategory }[] = [
		{ label: "Popular Movies", value: "popular" },
		{ label: "Top Rated Movies", value: "top_rated" },
		{ label: "Upcoming Movies", value: "upcoming" },
		{ label: "Now Playing Movies", value: "now_playing" },
	];

	return (
		<section className={s.page}>
			<div
				className={s.section}
				style={{
					backgroundImage:
						"linear-gradient(rgba(4, 21, 45, 0) 0%, rgb(18, 18, 18) 79.17%), url(http://image.tmdb.org/t/p/original/wsQPh8gz0sK3C3mAyaXcPSSOWUZ.jpg)",
				}}
			>
				<div className={s.mainContent}>
					<div className={s.header}>
						<h1 className={s.title}>WELCOME</h1>
						<h2 className={s.subtitle}>Browse highlighted titles from TMDB</h2>
						<SearchForm />
					</div>
				</div>
			</div>
			<div className={s.categories}>
				{tabs.map((tab) => (
					<MovieSection
						key={tab.value}
						category={tab.value}
						title={tab.label}
					/>
				))}
			</div>
		</section>
	);
};
