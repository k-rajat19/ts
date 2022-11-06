let num:3=3 // type literal - A type that represents a single value and nothing else

let i;
//let j=i*3  // can't use i before you can assign a value and type to it


// any
let a:any=23
a='23'
a=['23']
// enable noImplicitAny flag if you don't want ts to infer `any` as a type

//unknown
// if you don't known type is going to be use unknown instead of any
let b:unknown=3
//console.log(b*3) // can't use b because of unknown type
console.log(b===3) // can compare


// typing of objects
const obj:{
readonly  a:number
    b:string
    c?:boolean
    [key:number]:boolean // index signature, type of key can only be number or string(since we are using keys as a number in this object so we can only use type number)
}={
    a:1,
    b:'1',
    2:true,
    3:false
}
// have to use exact same number of properties as you defines in an object type
obj.b='2' // objects are mutable in js no matter what you are using const or let 
//obj.a='1' error because of readonly


// empty object type {}, means something can be anything expect null and undefined

let arr:[string,...string[]]=['mike','steve','jonathan','billy']

// null - absence of value
// undefined- variable that has not been assigned a value yet
// void- funtion that doesn't have a return statement
// never- function that never returns

