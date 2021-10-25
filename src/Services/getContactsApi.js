import { http } from "./HttpServices";

export function getContactsApi() {
	return http.get('/contacts');
}