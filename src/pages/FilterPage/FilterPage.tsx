import s from "./FilterPage.module.css";

export const FilterPage = () => {
	return (
		<section className={s.section}>
			<div className={s.filterColumn}>
				<div className={s.header}>
					<h2 className={s.title}>Popular Movies</h2>
				</div>
				<aside className={s.filters}></aside>
			</div>

			<div className={s.moviesColumn}></div>

			<div className={s.content}>
				<div className={s.container}>
					<div className={s.pagination}></div>
				</div>
			</div>
		</section>
	);
};
