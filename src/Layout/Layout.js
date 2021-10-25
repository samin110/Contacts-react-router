import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
	return (
		<div>
			<Navigation />
			{children}
			<Footer />
		</div>
	);
}

export default Layout;