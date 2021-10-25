import { http } from "./HttpServices";

export default function putContacts(id, data) {
	return http.put(`/contacts/${id}`, data)
}