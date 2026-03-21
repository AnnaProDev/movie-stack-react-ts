import s from "./MainPage.module.css";

export const MainPage = () => {

	
	return (
		<section
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
				</div>
			</div>
		</section>
	);
};
