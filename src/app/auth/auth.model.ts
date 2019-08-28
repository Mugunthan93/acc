export interface AuthResponseData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}

export class User {
    constructor(
        public id: string,
        public email: string,
        public _token: string,
        public tokenExpirationDate: Date
    ) {

    }

    get Token() {
        if (!this.tokenExpirationDate || this.tokenExpirationDate <= new Date()) {
            return null;
        }
        return this._token;
    }
}