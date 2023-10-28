import { jwtDecode } from 'jwt-decode'

export const checkTokenExpiration = (token: string) => {
    const date = new Date().getTime() / 1000;
    const expToken = jwtDecode(token).exp;
    if (expToken && expToken > date) {
        return true;
    }
    return false;
}
