import s from "./Footer.module.css";

export const Footer = () => {
  return (
	 <div className={s.container}>
		<div> &copy; {new Date().getFullYear()} Movie Search Demo · Data courtesy of TMDB.</div>
	 </div>
  )
}
