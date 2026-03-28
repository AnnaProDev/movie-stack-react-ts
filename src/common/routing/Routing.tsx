import { CategoryPage } from "@/pages/CategoryPage/CategoryPage"
import { FavoritesPage } from "@/pages/FavoritesPage/FavoritesPage"
import { FilterPage } from "@/pages/FilterPage/FilterPage"
import { MainPage } from "@/pages/MainPage/MainPage"
import { PageNotFound } from "@/pages/PageNotFound/PageNotFound"
import { SearchPage } from "@/pages/SearchPage/SearchPage"
import { Route, Routes } from "react-router-dom"

export const Path = {
  Main: '/',
  Category: '/movies',
  Filter: '/filter',
  Search: '/search',
  Favorites: '/favorites',
  NotFound: '*',
} as const
 
export const Routing = () => (
  <Routes>
    <Route path={Path.Main} element={<MainPage />} />
    <Route path={Path.Category} element={<CategoryPage />} />
    <Route path={Path.Filter} element={<FilterPage />} />
    <Route path={Path.Search} element={<SearchPage />} />
    <Route path={Path.Favorites} element={<FavoritesPage />} />
    <Route path={Path.NotFound} element={<PageNotFound />} />
  </Routes>
)