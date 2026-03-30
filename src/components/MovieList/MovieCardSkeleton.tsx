import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import s from '@/components/MovieCard/MovieCard.module.css';

export const MovieCardSkeleton = () => {
	return (
		<li className={s.card}>
			<div className={s.posterFrame}>
				<Skeleton
					height="100%"
					containerClassName={s.posterLink}
					style={{ borderRadius: "16px" }}
					baseColor="var(--bg-secondary)"
					highlightColor="var(--bg-primary)"
					count={1}
				/>
			</div>
			<div style={{ marginTop: "10px" }}>
				<Skeleton
					count={1}
					height={20}
					width="100%"
					baseColor="var(--bg-secondary)"
					highlightColor="var(--bg-primary)"
				/>
			</div>
		</li>
	);
};
