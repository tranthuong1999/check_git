// const arrA = [40, 100, 1, 5, 25, 10];
// const arrB = [2, 32, 4, 5, 6, 1, 1];

// var sx = arrA.sort(function (a, b) {
//   return a - b;
// });

// var arrC = arrA.concat(arrB).sort(function (a, b) {
//   return a - b;
// });

// function check(arr) {
//   let newArr = [];
//   return arr.filter((e) => {
//     return newArr.includes(e) ? "" : newArr.push(e);
//   });
// }

// check(arrC);

// const X = [1, 2, 3];
// const X1 = [0, 1, 2, 3];
// const X2 = [0, 1, 2, 3];
// const X3 = [0, 1, 2, 3];
// const X4 = [0, 1, 2, 3];
// const X5 = [0, 1, 2, 3];
// const X6 = [0, 1, 2, 3];
// const X7 = [0, 1, 2, 3];
// const X8 = [0, 1, 2, 3];
// const X9 = [0, 1, 2, 3];
// const X10 = [0, 1, 2, 3];
// const X11 = [0, 1, 2, 3];
// const X12 = [0, 1, 2, 3];
// const X13 = [0, 1, 2, 3];
// const X14 = [0, 1, 2, 3];
// const X15 = [0, 1, 2, 3];
// const X16 = [0, 1, 2, 3];
// const X17 = [0, 1, 2, 3];
// const X18 = [0, 1, 2, 3];
// const X19 = [0, 1, 2, 3];
// const X20 = [0, 1, 2, 3];
// const X21 = [0, 1, 2, 3];
// const X22 = [0, 1, 2, 3];
// const X23 = [0, 1, 2, 3];
// const X24 = [0, 1, 2, 3];
// const X25 = [0];

// const arrBig = X.concat(X1)
//   .concat(X2)
//   .concat(X3)
//   .concat(X4)
//   .concat(X5)
//   .concat(X6)
//   .concat(X7)
//   .concat(X8)
//   .concat(X9)
//   .concat(X10)
//   .concat(X11)
//   .concat(X12)
//   .concat(X13)
//   .concat(X14)
//   .concat(X15)
//   .concat(X16)
//   .concat(X17)
//   .concat(X18)
//   .concat(X19)
//   .concat(X20)
//   .concat(X21)
//   .concat(X22)
//   .concat(X23)
//   .concat(X24)
//   .concat(X25);

// console.log(arrBig);

// function average(arr) {
//   const sum = arr.reduce((a, b) => a + b, 0);
//   const length = arr.length;
//   return sum / length;
// }
// console.log(average(arrBig));
// average(arrBig);

var MatrixM = [
  [0, 0, 0, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1],
];

for (y in MatrixM) {
  for (x in MatrixM[y]) {
    let MatrixN = [];

    if (MatrixM[y][x] == 1) {
      MatrixN = MatrixM[y][x];
    }
  }
}
