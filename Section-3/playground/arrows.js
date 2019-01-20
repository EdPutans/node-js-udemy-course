let square = (x) =>  x*x

console.log(square(2))

let user = {
    name: 'Andrew',
    badHi: () => console.log('Henlo, I cant see my name'),
    sayHi(){ 
        console.log(arguments)
        console.log(`Hello, I'm ${this.name}`)}
    }
user.badHi()
user.sayHi()