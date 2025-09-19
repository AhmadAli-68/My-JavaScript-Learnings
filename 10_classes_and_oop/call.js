function setUsername(username) {
    this.username = username
    console.log("function called")
}

function createUser(username, email, password) {
    setUsername.call(this, username) 
    
    // yeh outer function call to ho rha lekin jb yeh call huwa to yeh function call stack se out hogya, means isme jo koi bhi variables thy, woh bhi gaib ho gye. to yeh setUsername humara outer function tha, call stack me yaha tk pohncha hi nai tha.

    //? to hum nai chahty k yeh gaib hojaye aur kuch kry bhi naa, to is scenario me iska reference hold rakhny k liye .call use krain gy. 

    //? hr function me apna apna this hota hai, yeh aik global object hi to hai. kabhi browser me Windows aur node.js me yeh.
    this.email = email
    this.password = password
}

const user = new createUser("Ahmad", "ahmad@gmail.com", "1234")

console.log(user)