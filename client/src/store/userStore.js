// UserStore.js
import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = true;
        this._userRole = ['client', 'driver', 'manager'];
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setUserRole(role) {
        this._userRole = role;
    }

    get isAuth() {
        return this._isAuth;
    }

    get userRole() {
        return this._userRole;
    }
}
