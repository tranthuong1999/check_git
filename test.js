const movies = [
    {
      "id": 1,
      "name": "Matrix"
    },
    {
      "id": 2,
      "name": "Star Wars"
    },
    {
      "id": 3,
      "name": "The wolf of Wall Street"
    }
  ]
  
  const series = [
    {
      "id": 4,
      "name": "South Park"
    },
    {
      "id": 5,
      "name": "The Simpsons"
    },
    {
      "id": 6,
      "name": "The Big Bang Theory"
    }
  ]

const get = property => object => object[property];
const getId = get('name'); 
// console.log(movies.map(getId))

  
  // Use the random number function as a default parameter for the cube function

//   destructuring

const tools = ['hammer', 'screwdriver']
const otherTools = ['wrench', 'saw']

const allTools = [...tools, ...otherTools]


const reverseString =(str ="Abc") => {

    console.log([...str])
}

var newArr = [ 10 ,9,7,3]

const sum = newArr.reduce((a,b) => {
    return a+b;
})
// console.log(sum)



const averageOfTwoNumbers = (...numbers) => numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / numbers.length

// console.log(averageOfTwoNumbers(...[5,6,7,8,9]))


// console.log(flattened)

// rest gom lai thanh 1 array
//  spread trai array thanh cac phan tu




var cat ={
  name : "Meomeo",
  age : 18
}


function run(cb){
  console.log("run")
  cb();
}
var mouse = {
  name : "Mickey",
  sayHi : function(){
    console.log("hi , my name is " , this.name)
  }
}
function greeting(name ,abc){

  return `Hi ${name} ${abc}`
}




