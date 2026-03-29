import { NavLink } from "react-router";
import { Path } from "@/common/routing/Routing";
import s from "./Header.module.css";
import tmdbLogo from "../../assets/tmdb-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/themeSlice";
import type { RootState } from "../../store/store";

const navItems = [
	{ to: Path.Main, label: "Main" },
	{ to: Path.MoviesDefault, label: "Category" },
	{ to: Path.Filter, label: "Filter" },
	{ to: Path.Search, label: "Search" },
	{ to: Path.Favorites, label: "Favorites" },
];

export const Header = () => {
	const theme = useSelector((state: RootState) => {
		return state.theme.mode;
	});

	document.body.setAttribute("data-theme", theme);

	const dispatch = useDispatch();

	return (
		<header className={s.container}>
			<nav className={s.nav}>
				<a
					href="https://www.themoviedb.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img className={s.logo} src={tmdbLogo} alt="TMDB Logo" />
				</a>
				<ul className={s.list}>
					{navItems.map((item) => (
						<li key={item.to}>
							<NavLink
								to={item.to}
								className={({ isActive }) =>
									`link ${isActive ? s.activeLink : s.link}`
								}
							>
								{item.label}
							</NavLink>
						</li>
					))}
				</ul>
				<button
					onClick={() => dispatch(toggleTheme())}
					type="button"
					aria-pressed={theme === "dark"}
					className={`${s.switch} ${theme === "dark" ? s.active : ""}`}
				>
					<span className={s.thumb}></span>
				</button>
			</nav>
		</header>
	);
};
