class User {
    constructor(username) {
        this.username = username
    }

    logIn() {
        console.log(`User with username ${this.username} is logged in.`)
    }

    static createId() {
        return `12344`
    }
}

//? static kisi bhi method ka access hr us object ko nai dena chahty, jo is class se instantiate huwa hai

const newUser = new User("Ahmad")
// console.log(newUser.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const newUser2 = new Teacher("Sheraz", "sheraz@gmail.com")
newUser2.logIn()
console.log(newUser2.createId())