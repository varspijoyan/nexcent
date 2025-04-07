import { authTypes } from "../types/authTypes";

export function signIn(user) {
  return {
    type: authTypes.SIGN_IN,
    data: user
  };
}

export function getMe() {
    return {
        type: authTypes.GET_ME
    }
}

export function logout() {
    localStorage.removeItem("accessToken");
    return {
        type: authTypes.LOGOUT
    }
}
