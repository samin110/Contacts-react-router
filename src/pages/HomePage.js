import ContactList from "../Components/ContactList/ContactList"

const HomePage = ({ contacts }) => {
	return (
		<div>
			<ContactList contacts={contacts} />
		</div>
	);
}

export default HomePage;