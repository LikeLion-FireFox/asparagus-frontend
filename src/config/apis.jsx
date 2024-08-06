import axios from "axios";

export const api = axios.create({
    // baseURL: import.meta.env.VITE_API_BASE_URL,
    baseURL: "https://firefox-cont-service.p-e.kr",
});

api.defaults.headers = {
    "Content-Type": "applications/json",
    Accept: "application/json",
};

export class HTTPException extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
    }
}

// api.interceptors.response.use(
//     (res) => {
//         return res;
//     },
//     async (err) => {
//         console.log("Response Error: ", err);
//         return Promise.reject(err);
//     },
// );
