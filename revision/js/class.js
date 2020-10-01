/*
    1. Classes does not support hoisting while function declaration could that's the main difference between them.
    2. Classes could be define in two type 
        I -> declaration
        II -> expression - we can declare a class without name in class expression.
    3. Classes has keywords and support strict mode.
    4. in js Classes only support one constructor.
    5. class has getter and setter.
    6. static -> classes has static method that is used without a class instance and can't be use by instance.
    7. without class key word 'this' keyword will redirect to global in case if it doesn't find values while in class this always return undefined value in case of non assign.
    8. field declaration is on the stage 3.
        we use simple declaration for public and use #before the variable for private.
    9. with super keyword you can access parent class static method.
*/

const echo = class {
    constructor(){
        console.log('by')
    }
}

console.log(echo.name)
console.log(new echo)

const ech = class echos{
    constructor(){
        console.log('hi')
    }
}

console.log(ech.name)
console.log(new ech)