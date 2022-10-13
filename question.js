var listQuestion = [
  { answer: "A", page: 1 },
  { answer: "C", page: 3 },
  { answer: "B", page: 2 },
];

var b = { answer: "A", page: 1 };

var listQuestionNew = [
  { answer: "C", age: 3 },
  { answer: "B", age: 2 },
  { answer: "A", page: 1 },
];

// console.log(listQuestion.concat({ answer: "B", page: 1 }));

// var a = listQuestion.filter((a) => (a.page = 2));
// console.log(a);
const arr = [
  { id: 1, name: "test1" },
  { id: 2, name: "test2" },
  { id: 2, name: "test3" },
  { id: 3, name: "test4" },
  { id: 4, name: "test5" },
  { id: 5, name: "test6" },
  { id: 5, name: "test7" },
  { id: 6, name: "test8" },
];

const listQuestions = [
  { chooseAnswer: "A", page: 1 },
  { chooseAnswer: "B", page: 1 },
  { chooseAnswer: "C", page: 1 },
  { chooseAnswer: "D", page: 1 },
  { chooseAnswer: "A", page: 2 },
  { chooseAnswer: "A", page: 5 },
  { chooseAnswer: "B", page: 3 },
  { chooseAnswer: "C", page: 4 },
  { chooseAnswer: "D", page: 2 },
  { chooseAnswer: "E", page: 1 },
];

// const uniqueObjects = [
//   ...new Map(listQuestions.map((item) => [item.page, item])).values(),
// ].sort((a, b) => a.page - b.page);

const uniqueObjects = [
  ...new Map(listQuestions.map((item) => [item.page, item])).values(),
];

let origArr = [
  { id: 2, label: "Dog" },
  { id: 4, label: "Cat" },
  { id: 3, label: "Horse" },
  { id: 20, label: "Horse" },
];

let newArr = [
  { id: 2, label: "Dog" },
  { id: 3, label: "Bird" },
  { id: 0, label: "Fish" },
];

const find = origArr.map((e) => {
  const answer = newArr.find((item) => e.id == item.id);
  return {
    ...e,
    answer,
  };
});
