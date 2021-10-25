import { http } from "./HttpServices";

export default function postContactsApi(data) {
	return http.post('/contacts', data)
}