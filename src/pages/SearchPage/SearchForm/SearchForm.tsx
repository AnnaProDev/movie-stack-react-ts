import { useState, type ChangeEvent } from "react";
import s from "./SearchForm.module.css";
import { useDebounceValue } from "@/common/hooks/useDebounceValue";

export const SearchForm = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const debouncedSearch = useDebounceValue(searchTerm, 700);
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return (
		<form className={s.form} onSubmit={(e) => e.preventDefault()}>
			<input
				type="search"
				className={s.input}
				placeholder="Search for movies..."
				value={searchTerm}
				onChange={handleInputChange}
			/>
			<button type="submit" className={s.button} disabled={!searchTerm.trim()}>
				Search
			</button>
		</form>
	);
};
