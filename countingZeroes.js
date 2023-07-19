// n= 5 ,(1-50)
// n= 10,(1-100)
// n= ? ,(1-n)
// value=100,200,10000

let myArray=[];
function countingZeroes(n){ 
for(i=0;i<=100;i++){
  myArray.push(i);
}
return myArray.toString().split('').filter(n=> myArray==0).length;

}
console.log(countingZeroes(100))