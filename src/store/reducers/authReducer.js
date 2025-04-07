import {authTypes} from "../types/authTypes";

export default function authReducer(init = {user: null, isAuthorized: false}, action) {
    switch(action.type) {
        case authTypes.SIGN_IN:
            return {
                ...init,
                user: action.data,
                isAuthorized: true
            };
        case authTypes.GET_ME: 
            return {
                ...init
            };
        case authTypes.LOGOUT:
            return {
                ...init,
                user: null,
                isAuthorized: false
            };
        default: 
            return init;
    }
} 