import { http } from "../Services/HttpServices";

export default function getOneContacts(id) {
	return http.get(`/contacts/${id}`)
}