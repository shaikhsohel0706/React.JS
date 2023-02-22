// const PI=Math.PI;
// const E=Math.E;
// const SQRT2=Math.SQRT2;
// console.log(PI);
// console.log(E);
// console.log(SQRT2);

// 2nd example
// we can write above example like this also 
const { PI ,E ,SQRT2}=Math
console.log(PI);
console.log(E);
console.log(SQRT2);

// Array destructuring
// print the value of Array without index 
// imp interview Q 
//  for example
const numbers = [2, 4, 5, 8, 6, 9]
// print value of index with index 
console.log(numbers[3]);
// print value of index without index 
const[a,b,c,d,e,f]=numbers
console.log(b);

// rest oprater and spread oprater-(...) these three dotes are the syntax of these oprater
const[first,...restNumbers]=numbers
console.log("first:",first);
console.log("restNumbers:",restNumbers);

const obj1={
    temp1: "34",
    temp2: "454",
    height:"6.1",
    fName:"shaikh",
    lName:"Azher",
};
const { temp1, temp2, ...person}=obj1
console.log(person);
 
const obj2= {...obj1};
obj2.color="fair"
 console.log("obj2",obj2);
 console.log("obj1",obj1);



