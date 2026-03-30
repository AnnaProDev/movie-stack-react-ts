import { useState, type ChangeEvent } from "react";
import s from "./SearchForm.module.css";
import { Link } from "react-router-dom";

export const SearchForm = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return (
		<form className={s.form} onSubmit={(e) => e.preventDefault()}>
			<input
				type="search"
				className={s.input}
				placeholder="Search for movie..."
				value={searchTerm}
				onChange={handleInputChange}
			/>
			<Link to={`/search`}>
				<button
					type="submit"
					className={s.button}
					disabled={!searchTerm.trim()}
				>
					Search
				</button>
			</Link>
		</form>
	);
};
