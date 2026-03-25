import { useState } from "react";
import s from "./SearchPage.module.css";
import { useSearchMoviesQuery } from "@/features/moviesApi/moviesApi";
import { MovieList } from "@/components/MovieList/MovieList";
import { Loading } from "@/components/Loading/Loading";
import { useDebounceValue } from "@/common/hooks/useDebounceValue";

export const SearchPage = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const debounceSearch = useDebounceValue(searchTerm);

	const { data, isLoading, isFetching } = useSearchMoviesQuery(debounceSearch);

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
						onChange={(e) => {
							setSearchTerm(e.currentTarget.value);
						}}
						value={searchTerm}
					/>
					<button type="submit" className={s.button} disabled>
						Search
					</button>
				</form>
				{!data?.results.length && !isLoading && (
					<div className={s.emptyMessage}>
						Enter a movie title to start searching.
					</div>
				)}
				{isFetching ? <Loading /> : <MovieList data={data?.results} />}
			</div>
		</section>
	);
};
