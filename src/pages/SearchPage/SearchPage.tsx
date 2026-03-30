import { useState, type ChangeEvent } from "react";
import s from "./SearchPage.module.css";
import { useGetSearchMoviesQuery } from "@/features";
import { MovieList, Pagination } from "@/components";
import { useDebounceValue } from "@/common/hooks";

export const SearchPage = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const debouncedSearch = useDebounceValue(searchTerm, 700);
	const [currentPage, setCurrentPage] = useState(1);

	const { data, isFetching, isLoading } = useGetSearchMoviesQuery({
		searchTerm: debouncedSearch,
		page: currentPage,
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
		setCurrentPage(1);
	};

	const renderContent = () => {
		const trimmedSearch = debouncedSearch.trim();
		const movies = data?.results ?? [];

		if (!trimmedSearch) {
			return (
				<div className={s.emptyMessage}>
					Enter a movie title to start searching.
				</div>
			);
		}

		if (movies.length === 0) {
			return (
				<div className={s.notFoundMessage}>
					No movies found for "{trimmedSearch}".
				</div>
			);
		}

		return <MovieList data={movies} isLoading={isLoading} />;
	};

	const hasResults = debouncedSearch.trim() && !isFetching;

	return (
		<section className={s.section}>
			<div className={s.container}>
				<header className={s.header}>
					<h2 className={s.title}>Search Results</h2>
				</header>

				<form className={s.form} onSubmit={(e) => e.preventDefault()}>
					<input
						type="search"
						className={s.input}
						placeholder="Search for movie..."
						value={searchTerm}
						onChange={handleInputChange}
					/>
					<button
						type="submit"
						className={s.button}
						disabled={!searchTerm.trim()}
					>
						Search
					</button>
				</form>
				{hasResults && (
					<div className={s.emptyMessage}>
						Results for "{debouncedSearch.trim()}"
					</div>
				)}

				{renderContent()}

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
