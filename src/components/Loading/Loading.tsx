// Loading.tsx
import s from "./Loading.module.css";

export const Loading = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.spinner} />
      <p className={s.text}>Loading...</p>
    </div>
  );
};