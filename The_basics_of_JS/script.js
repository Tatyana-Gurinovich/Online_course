// Data types
/* 
Numbers
String
Boolean
Object
Null
Undefined
*/
let number = 42
console.log(typeof number)

let string ='message'
console.log(typeof string)

let isTrue = true
console.log(typeof isTrue)

let obj={a:1}
console.log(typeof obj)

let nothing =null
console.log(typeof nothing)

let undef = undefined
console.log(typeof undef)

//Working with basic operations

let num1 =12
let num2 = 8
console.log( num1+num2 ) // sum
console.log( num1-num2 ) // -
console.log( num1*num2 )  // *
console.log( num1/num2 ) // /

let str1 = 'Hello'
let str2 = 'World'
console.log(str1 + str2)


/*
    &&  | true  | false
  true  | true  | false
  false | false | false

    ||  | true  | false
  true  | true  | true
  false | true  | false

  && (и) - true если все значения true
  || (или) - true если хоть одно значение true
  ! (нет) - инвертирует true или false
*/

console.log(true && true)
console.log(true && false)

console.log(true || false)
console.log(false || false)

console.log(!false)
console.log(!!!true) // !!!true => !!false => !true => false

console.log((false && true) || (true || false) || !true) 
// false || true || false => true

