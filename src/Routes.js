import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
	{ path: "/", component: HomePage, exact: true },
	{ path: "/contacts", component: ContactsPage },
	{ component: NotFoundPage }
];

export default routes;
