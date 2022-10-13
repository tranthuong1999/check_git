// // bai1
// function check(str){

// var string=str.split('');

// console.log(string)

// var arrStr=string.reverse();

//  return arrStr.join("");
//  }
// console.log(check("abc"));

// // bai3
// var numbers = [  true , true , false]
// var sum = numbers.reduce(function(a,b){
//     if( a === false || b === false){
//         return false
//     }
//     return true
// })

// console.log(sum)

// // bai2
// // Viết 1 function có input là 1 array gồm các số nguyên có thể trùng nhau,
// // output là 1 array gồm các số nguyên đã loại bỏ các số trùng đồng thời số
// //  lẻ được sắp xếp trước số chẵn theo thứ tự từ bé đến lớn?

// var numbers = [ 1,2,3,4,7,6,2,3,4 ]
//  function checkArray( arr){
//     let newArr = []
//     arr.filter( e =>{
//     newArr.includes(e) ? "" :  newArr.push(e)
//     })
//     console.log(newArr)
//     // return newArr.sort( (a ,b) => a-b) ;
//  }

//  checkArray(numbers)

//  function cach2( arr){
//     let newArr = []
//     for( let i =0 ; i<arr.length ; i++){
//         if( newArr.indexOf(arr[i]) == -1){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr ;
//  }

//  function cach3(arr){
//     let newArr = []
//     for( let i = 0 ; i<arr.length ; i++){
//         if(! newArr.includes(arr[i])){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
//  }

// let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
// let myArrayWithNoDuplicates = myArray.reduce(function (accumulator, element) {

//     console.log('acumulator----------',accumulator);

//   if (accumulator.indexOf(element) === -1) {
//     accumulator.push(element)
//   }
//   return accumulator
// }, [])

// // [ 'a', 'b', 'c', 'e', 'd' ]

//   let arrFalse = [ true, false , false]

//  var checkFale = arrFalse.reduce(function( accumulator , e){
//     if( accumulator.indexOf(e) == -1){
//         accumulator.push(e)
//     }

//     return accumulator ;

//  },[])


console.log("Edit test")

const test=[12,11,12]