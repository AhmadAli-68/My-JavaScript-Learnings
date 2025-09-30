class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    capitalizeUsername() {
        return this.username.toUpperCase()
    }
}

const user = new User("Ahmad", "ahmad@gmail.com", "12345678")

console.log(user.encryptPassword())
console.log(user.capitalizeUsername())

// behind the scene

function anotherUser(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

anotherUser.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

anotherUser.prototype.capitalizeUsername = function() {
    return this.username.toUpperCase()
}

const user2 = new anotherUser("AbdulRehman", "abdul@gmail.com", "1234567890")

console.log(user2.capitalizeUsername())
console.log(user2.encryptPassword())