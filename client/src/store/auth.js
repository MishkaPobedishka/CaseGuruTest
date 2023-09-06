import {makeAutoObservable} from 'mobx';
import AuthService from '../services/AuthService';
import { Navigate } from 'react-router-dom';

class Auth{
    email = '';
    password = '';
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setEmail(email) {
        this.email = email;
    }

    setPassword(password) {
        this.password = password;
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    async login () {
        console.log(this.email, this.password)
        try {
            const response = await AuthService.login(this.email, this.password);
            console.log(response.data);
            this.setAuth(true);
        } catch (e) {
            
        } finally {
            
        }
    }

}

export default new Auth();