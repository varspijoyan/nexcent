export function getAuthorizationData(state) {
    return state.authorization;
}

export function getUserData(state) {
    return state.authorization.user;
}