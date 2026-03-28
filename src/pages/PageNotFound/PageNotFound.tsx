import { Link } from "react-router-dom";
import s from "./PageNotFound.module.css";

export const PageNotFound = () => {
	return (
		<div className={s.section}>
			<h1 className={s.title}>404</h1>
			<p className={s.msg}>This scene was cut from the final edit.</p>
			<p className={s.sub}>The page you're looking for doesn't exist.</p>
			<Link to="/" className={s.button}>
				Back to Home
			</Link>
		</div>
	);
};
