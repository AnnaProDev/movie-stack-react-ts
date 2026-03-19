import { NavLink } from "react-router";
import { Path } from "@/common/routing/Routing";
import s from "./Header.module.css";
import tmdbLogo from "../../assets/tmdb-logo.svg";

const navItems = [
	{ to: Path.Main, label: "Main" },
	{ to: Path.Category, label: "Category" },
	{ to: Path.Filter, label: "Filter" },
	{ to: Path.Search, label: "Search" },
	{ to: Path.Favorites, label: "Favorites" },
];

export const Header = () => {
	return (
		<header className={s.container}>
			<nav className={s.nav}>
				<img className={s.logo} src={tmdbLogo} alt="TMDB Logo" />
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
			</nav>
		</header>
	);
};
