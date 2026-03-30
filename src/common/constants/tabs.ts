import type { MovieCategory } from "../enums";

export type TabItem = {
  label: string;
  value: MovieCategory;
  link: string;
}

export const MOVIE_TABS: TabItem[] = [
  { label: "Popular Movies", value: "popular", link: "popular" },
  { label: "Top Rated Movies", value: "top_rated", link: "top-rated" },
  { label: "Upcoming Movies", value: "upcoming", link: "upcoming" },
  { label: "Now Playing Movies", value: "now_playing", link: "now-playing" },
];