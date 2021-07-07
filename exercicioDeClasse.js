class User {
    constructor(name, email){
        this.name = name
        this.email = email
    }

    sendMessage(message) {
        console.log(message)
    }
}

const user = new User("Gustavo" , "gustabusch@gmail.com");

user.sendMessage("Hello Hiring Coders!")

console.log(user.email)