import api from '../http/api';

export default class AuthService {
    static async login(email, password) {
        console.log('send post');
        return api.post('/auth/login', {email, password})
    }
}