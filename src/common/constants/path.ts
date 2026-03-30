export const PATH = {
   Main: "/",
   Movies: "/movies/:category",
   MoviesDefault: "/movies",
   Filter: "/filter",
   Search: "/search",
   Favorites: "/favorites",
   Details: "/movie/:id",
   NotFound: "*",
} as const;