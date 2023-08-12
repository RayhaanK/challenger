class Person{
    #firstName = "";
    constructor (firstName){
        this.#firstName = firstName
    }
    walk() {
        console.log(`${this.#firstName} is Walking`)
    }
    dance() {
        console.log(`${this.#firstName} is Dancing`)
    }
}
const person1 = new Person("Nuraan")
const person2 = new Person("Rayaan")
person1.walk()
person2.dance()