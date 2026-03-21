import { createSlice } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

const loadTheme = (): Theme => {
  return (localStorage.getItem("theme") as Theme) ?? "light";
};

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: loadTheme(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;