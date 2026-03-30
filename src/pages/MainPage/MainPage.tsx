import s from "./MainPage.module.css";
import { SearchForm } from "./SearchForm/SearchForm";
import { MovieSection } from "./MovieSection/MovieSection";
import { MOVIE_TABS } from "@/common/constants/tabs";

export const MainPage = () => {

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
				{MOVIE_TABS.map((tab) => (
					<MovieSection
						key={tab.value}
						category={tab.value}
						title={tab.label}
						link={tab.link}
					/>
				))}
			</div>
		</section>
	);
};
