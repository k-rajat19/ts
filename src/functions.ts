// call signatures
type sum={
    (a:number, b:number):number
}
const sum:sum=(a,b)=> {return a+b}

// generic type parameter or generics

// type  genericSum={
//     <T>(a:T,b:T):T // scope of `T` generic here is limited to only this line
// }
type genericSum<T,U>={ // scope of `T` generic here is inside the curly braces
    (a:T,b:T):U
}
const genericSum:genericSum<string,string>=(a,b)=>{return a+b}
genericSum('1','2')

// you can use generics for classes,type aliases,interfaces,functions

// extend keyword
 type func<T=string>={ //T has default type string
    message:string,
    isValid:T
}
function test<T extends func<boolean>={message:'default message',isValid:false}>(a:T):void{
    return console.log(`Result of Test functions is: ${a.message} +${a.isValid}`);
}
test({message:'fuckoff!',isValid:true,optional:"this is optional"}) 
// you have to  pass at least all propeties in type `func`