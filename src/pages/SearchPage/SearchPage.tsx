import s from "./SearchPage.module.css";

export const SearchPage = () => {
	return (
		<section className={s.section}>
			<div className="container">
				<div className={s.header}>
					<h2 className={s.title}>Search Results</h2>
				</div>
				<form action="/search" className={s.form}>
					<input
						type="search"
						className={s.input}
						placeholder="Search for movies..."
						id="search"
					/>
					<button type="submit" className={s.button} disabled>
						Search
					</button>
				</form>
			</div>
		</section>
	);
};
