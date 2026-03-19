# 🎬 MovieStack

**MovieStack** is a high-performance web application for browsing and discovering movies, powered by **The Movie Database (TMDB) API**. This project demonstrates a "from-scratch" approach to UI development, focusing on clean architecture, robust state management, and modular CSS.

---

## 🚀 Tech Stack

- **Core:** [React 18](https://reactjs.org/) (Built with [Vite](https://vitejs.dev/))
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strictly typed)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
- **Data Fetching:** **RTK Query** (Automated caching & server state synchronization)
- **Styling:** **CSS Modules** (100% custom styling, zero UI frameworks)
- **Routing:** [React Router v6](https://reactrouter.com/)

---

## ✨ Key Features

- **Custom UI System:** Built entirely from the ground up using **CSS Modules** for complete design control and a lightweight bundle.
- **Optimized Data Fetching:** Leveraging **RTK Query** for efficient caching, request deduplication, and declarative handling of loading/error states.
- **Strict Typing:** Comprehensive TypeScript interfaces for TMDB API responses, component props, and global state management.
- **Hand-Crafted Responsive Layouts:** Optimized for all screen sizes (Mobile, Tablet, Desktop) using modern CSS Grid and Flexbox techniques.
- **Performance-Focused:** Minimal external dependencies to ensure fast load times and a smooth user experience.

---

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/moviestack.git
   cd moviestack
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:** Create a `.env` file in the root directory and add your TMDB API Key:
   ```
   VITE_TMDB_API_KEY=your_api_key_here
   VITE_TMDB_BASE_URL=https://api.themoviedb.org/3/
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

---

## 📂 Project Structure

- `src/app` — Redux store configuration and typed hooks (`useAppDispatch`, `useAppSelector`).
- `src/features` — Domain logic, including RTK Query API slices and state slices.
- `src/components` — Pure UI components styled exclusively with CSS Modules.
- `src/pages` — Main application views and routing logic.
- `src/utils` — Global constants, helper functions, and shared TypeScript interfaces.

---

## 📝 Technical Decisions

- **Pure CSS Modules:** Chosen to demonstrate professional layout skills and CSS architecture without relying on third-party UI libraries (No Material UI/Bootstrap).
- **RTK Query:** Implemented to manage server state efficiently, replacing complex `useEffect` logic with a modern, declarative data-fetching layer.
- **Vite:** Selected for its blazing-fast HMR (Hot Module Replacement) and modern build pipeline.

---

## ⚖️ License

This project is for educational and demonstration purposes. Movie data provided by TMDB.
