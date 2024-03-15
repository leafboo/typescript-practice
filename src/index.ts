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
let customerId = <number>cid