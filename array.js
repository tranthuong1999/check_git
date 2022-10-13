

const sum =( ...number) =>{
    return number.reduce(( a,b) => a+b)
}

console.log(sum(1,2,3,4))

const sumArray =( arr)  =>{
    return arr.reduce( (a,b) => a+b)
}
console.log(sumArray([1,2,3,4,5]))


// call: function call( this , param1 , param 2,...)
// apply : function apply(this, [ param1 , param 2 ,...])

function greeting(){
    console.log(`Hi ${this.name} . I am ${this.age}`)
}

const cat = {
    name : "Tom",
    age : '100'
}

greeting.call(cat)


function check(){
    console.log(arguments)
}


const array = [12,3,4,5,6]

const element = [ 'a','b']

array.push.apply(array , element)
console.log(array)

// const arrayNew = array.concat(element)
// console.log("array new-----" , arrayNew)
// console.log("array-----" ,array)



var x=4 ;

 x= 2
console.log(x)





