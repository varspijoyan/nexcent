import { authorizationTypes } from "../types/authorizationTypes";

export function authorizationReducer(initialState = {user: null}, action) {
    switch(action.type) {
        case authorizationTypes.SIGN_UP:
            return {
                ...initialState,
                user: action.payload,
            };
        case authorizationTypes.SIGN_IN:
            return {
                ...initialState,
                user: action.payload,
            };
        case authorizationTypes.GET_USER_DATA: 
            return {
                ...initialState
            };
        case authorizationTypes.LOGOUT:
            return {
                ...initialState,
                user: null,
            };
        default: {
            return initialState;
        }
    }
}