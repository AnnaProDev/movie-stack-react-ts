import { Footer } from "@/components/Footer/Footer";
import { Routing } from "../../common/routing/Routing";
import { Header } from "../Header/Header";
import { ToastContainer } from 'react-toastify'
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
			<ToastContainer />
		</>
	);
}

export default App;
