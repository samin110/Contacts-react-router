import { Link } from "react-router-dom"

const ContactDetail = ({ location }) => {
	const { name, email } = location.state;
	return (
		<div>
			<h2>Name is : {name}</h2>
			<h2>Email is : {email}</h2>
			<Link to="/">Back to Home</Link>
		</div>
	);
}

export default ContactDetail;