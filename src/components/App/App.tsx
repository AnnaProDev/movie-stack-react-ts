import { Footer } from "@/components/Footer/Footer";
import { Routing } from "../../common/routing/Routing";
import { Header } from "../Header/Header";
import { ToastContainer } from 'react-toastify'
import s from "./App.module.css";
import { useGlobalLoading } from "@/common/hooks/useGlobalLoading";
import { LinearProgress } from "../LinearProgress/LinearProgress";



function App() {
	const isGlobalLoading = useGlobalLoading()
	return (
		<>
			<div className={s.container}>
				<Header />
				{isGlobalLoading && <LinearProgress />}
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
