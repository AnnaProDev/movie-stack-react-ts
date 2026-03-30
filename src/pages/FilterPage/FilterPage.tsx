import { Pagination, MovieList } from "@/components";
import s from "./FilterPage.module.css";
import { useState } from "react";
import { useGetFilterMoviesQuery } from "@/features";
import { useDebounceValue } from "@/common/hooks";
import type { SortBy } from "@/common/enums";

export const FilterPage = () => {
	const GENRES: { label: string; id: number }[] = [
		{ label: "Action", id: 28 },
		{ label: "Adventure", id: 12 },
		{ label: "Animation", id: 16 },
		{ label: "Comedy", id: 35 },
		{ label: "Crime", id: 80 },
		{ label: "Documentary", id: 99 },
		{ label: "Drama", id: 18 },
		{ label: "Family", id: 10751 },
		{ label: "Fantasy", id: 14 },
		{ label: "History", id: 36 },
		{ label: "Horror", id: 27 },
		{ label: "Music", id: 10402 },
		{ label: "Mystery", id: 9648 },
		{ label: "Romance", id: 10749 },
		{ label: "Science Fiction", id: 878 },
		{ label: "TV Movie", id: 10770 },
		{ label: "Thriller", id: 53 },
		{ label: "War", id: 10752 },
		{ label: "Western", id: 37 },
	];

	const [currentPage, setCurrentPage] = useState(1);
	const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
	const [minRating, setMinRating] = useState("0");
	const [maxRating, setMaxRating] = useState("10");
	const [sortBy, setSortBy] = useState<SortBy>("popularity.desc");

	const debouncedMinRating = useDebounceValue(minRating, 200);
	const debouncedMaxRating = useDebounceValue(maxRating, 200);

	const { data, isLoading} = useGetFilterMoviesQuery({
		sort_by: sortBy,
		vote_average__gte: debouncedMinRating,
		vote_average__lte: debouncedMaxRating,
		with_genres: selectedGenres.join(","),
		page: currentPage,
	});



	const handleResetFilters = () => {
		setSelectedGenres([]);
		setMinRating("0");
		setMaxRating("10");
		setCurrentPage(1);
		setSortBy("popularity.desc");
	}

	return (
		<section className={s.section}>
			<div className={s.header}>
				<h2 className={s.title}>Filters / Sort</h2>
			</div>

			<aside className={s.filters}>
				<div className={s.wrapper}>
					<div className={s.sortControls}>
						<label htmlFor="sort-select" className={s.sortLabel}>
							Sort by:
						</label>
						<select
							id="sort-select"
							className={s.sortSelect}
							value={sortBy}
							onChange={(e) => setSortBy(e.target.value as SortBy)}
						>
							<option value="popularity.desc">Popularity ↓</option>
							<option value="popularity.asc">Popularity ↑</option>
							<option value="vote_average.desc">Rating ↓</option>
							<option value="vote_average.asc">Rating ↑</option>
							<option value="primary_release_date.desc">Release Date ↓</option>
							<option value="primary_release_date.asc">Release Date ↑</option>
							<option value="title.asc">Title A-Z</option>
							<option value="title.desc">Title Z-A</option>
						</select>
					</div>
					<div className={s.container}>
						<div className={s.filterHeader}>
							<span>Rating</span>
							<span className={s.values}>
								{minRating} - {maxRating}
							</span>
						</div>
						<div className={s.ranges}>
							<div className={s.rangeTrack}></div>
							<div className={s.rangeFill}></div>
							<input
								min="0"
								max="10"
								step="0.1"
								className={s.rangeInput}
								aria-label="Minimum rating"
								type="range"
								value={minRating}
								onChange={(e) => setMinRating(e.target.value)}
							/>
							<input
								min="0"
								max="10"
								step="0.1"
								className={s.rangeInput}
								aria-label="Maximum rating"
								type="range"
								value={maxRating}
								onChange={(e) => setMaxRating(e.target.value)}
							/>
						</div>
					</div>
					<div className={s.reset}>
						<button
							className={s.resetButton}
							type="button"
							onClick={() => handleResetFilters()}
						>
							Reset Filters
						</button>
					</div>
				</div>
				<div className={s.genres}>
					{GENRES.map(({ id, label }) => (
						<button
							key={id}
							type="button"
							onClick={() =>
								setSelectedGenres((prev) =>
									prev.includes(id)
										? prev.filter((g) => g !== id)
										: [...prev, id],
								)
							}
							className={`${s.genreButton} ${selectedGenres.includes(id) ? s.active : ""}`}
						>
							{label}
						</button>
					))}
				</div>
			</aside>

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
