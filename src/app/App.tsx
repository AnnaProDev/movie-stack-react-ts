import { Footer } from "@/components/Footer/Footer";
import { Routing } from "../common/routing/Routing";
import { Header } from "../components/Header/Header";
import s from "./App.module.css";

function App() {
	return (
		<>
			<div className={s.container}>
				<Header />
				<Routing />
				<Footer />
			</div>
		</>
	);
}

export default App;
