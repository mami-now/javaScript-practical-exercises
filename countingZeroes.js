// n= 5 ,(1-50)
// n= 10,(1-100)
// n= ? ,(1-n)
// value=100,200,10000


function countingZeroes(n){
  let myArray=[]; 
for(i=1;i<=n;i++){
  myArray.push(i);
}
return myArray.toString().split('').filter(myArray=> myArray==0).length;

}
console.log(countingZeroes(100))