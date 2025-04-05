import { api } from "./api/api";

export async function register(username, email, password) {
    try {
        const res = await api.post('/users', { username, email, password })
        return res.data;
    } catch (error) {
        console.error("Failed to post register data", error);
    }
}

export async function login(username, password) {
    try {
        const res = await api.post('/auth/login', { username, password });
        return res.data; 
    } catch (error) {
        console.error("Failed to post login data", error);
    }
}

export async function getUser() {
    try {
        const res = await api.get('/users');
        return res.data;
    } catch (error) {
        console.error("Failed to get user data", error);
    }
}
