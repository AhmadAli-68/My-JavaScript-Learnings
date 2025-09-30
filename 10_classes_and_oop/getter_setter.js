class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value //? setters me kabhi return nai hota
    }

    get password() {
        return `${this._password}ahmad`
    }

    set password(value) {
        this._password = value
    }
}

const user = new User('User@gmail.com', "abcd1234556")
console.log(user.password)
console.log(user.email)

//? Maximum call stack size exceeded --> yeh error is liye ata hai kyu k constructor bhi value set krny ki koshish kr rha hai, aur jo humne getter and setter functions bnaye hain, woh setter function bhi value set krny ki koshish kr rha hai. to dono me aik race lg jati hai, k mai set kru ga, mai set kru ga. 