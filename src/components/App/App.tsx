import { Footer } from "@/components/Footer/Footer";
import { Routing } from "../../common/routing/Routing";
import { Header } from "../Header/Header";
import s from "./App.module.css";

function App() {
	return (
		<>
			<div className={s.container}>
				<Header />
				<div className={s.mainContent}>
					<Routing />
				</div>
				<Footer />
			</div>
		</>
	);
}

export default App;
