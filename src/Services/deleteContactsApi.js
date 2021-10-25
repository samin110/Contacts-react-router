import { http } from "./HttpServices";

export default function deleteContactsApi(id) {
	return http.delete(`/contacts/${id}`);
}