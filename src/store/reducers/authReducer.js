import { authTypes } from "../types/authTypes";

export function authReducers(
  init = { user: null, isAuthorized: false },
  action
) {
    switch(action.type) {
        case authTypes.LOGIN:
            return {
                ...init,
                user: action.data,
                isAuthorized: true 
            };
        case authTypes.GET_ME: 
            return {
                ...init
            }
        case authTypes.LOGOUT:
            return {
                ...init,
                user: null,
                isAuthorized: false
            }
    }
}
