// Basic Types
let id: number = 5
let company: string = 'Google'
let isRested: boolean = true
let x: any = "yes'nt"

x = true


// tuple 
let person : [number, string, boolean] = [1, "br", true]
let employee: {id: number, firstName: string}[]

employee = [
  {
    id: 1,
    firstName: "sam"
  },
  {
    id: 2,
    firstName: "John"
  }
]

// Union
let pid: string | number
pid = 12
pid = "E36aUo"


// Enum
enum Direction1 {
  Up = 3, 
  Down, 
  Left,
  Right
}

enum Direction2 {
  Up = "Up", 
  Down = "Down", 
  Left = "Left",
  Right = "Right"
}

for (const direction in Direction1) {
  if (Number(direction)) {
    console.log(direction)
  }
  
}

// Objects

type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1, 
  name: 'John'
}

// Type Assertion
let cid: any = 1
//let customerId = <number>cid
let customerId = cid as number

//Functions
function addNum(x: number, y: number): number {
  return x + y
}

function log(message: string | number): void {
  console.log(message)
}

// Interfaces
interface UserInterface {
  readonly id: number
  name: string
  age?: number
}

const user1: UserInterface = {
  id: 1, 
  name: 'John'
}

interface MathFunction {
  (x: number, y: number): number
}

const add: MathFunction = (x: number, y: number): number => x + y



interface PersonInterface {
  id: number
  name: string
  register(): string
}
// Classes
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const brad = new Person(1, 'Brad Traversy')
const mike = new Person(69, 'Waltuh')

// Subclass
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, "Shawn", "Developer")


// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(["Brad", "John", "Jill"])

numArray.push()