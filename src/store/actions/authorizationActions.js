import {authorizationTypes} from "../types/authorizationTypes";

// register
export function signUp(user) {
    return {
        type: authorizationTypes.SIGN_UP,
        payload: user
    };
}

// login
export function signIn(user) {
    return {
        type: authorizationTypes.SIGN_IN,
        payload: user
    };
}

// get users
export function getUserData() {
    return {
        type: authorizationTypes.GET_USER_DATA
    };
}

// logout 
export function logout() {
    localStorage.removeItem("access");
    return {
        type: authorizationTypes.LOGOUT
    };
}