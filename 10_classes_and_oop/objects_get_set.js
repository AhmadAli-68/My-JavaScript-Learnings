const User = {
    _email: 'ahmad@fb.com',
    _password: 'abcdef',

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

const user = Object.create(User)
console.log(user.email)