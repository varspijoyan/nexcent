import { api } from "./api";

export async function login(email) {
    try {
        const res = await api.post('/user/auth/admin/sign_in', { email });
        return res.data;
    } catch (error) {
        console.error("Something went wrong while trying to login");
    }
}

export async function verify(email, otp) {
    try {
        const res = await api.post('/user/auth/verify_otp', { email, otp });
        return res.data;
    } catch (error) {
        console.error("Something went wrong while trying verification");
    }
}

export async function getMe() {
    try {
        const res = await api.get('/user/me');
        return res.data;
    } catch (error) {
        
    }
}

export async function updateMe(first_name, last_name) {
    try {
        const res = await api.put('/user/update_me', { first_name, last_name });
        return res.data;
    } catch (error) {
        console.error("Something went wrong while trying to update user");
    }
}