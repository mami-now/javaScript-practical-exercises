function arrayStat(array){
let newObject={};
let total=array.reduce((a,b)=> a+b ,0)
newObject.sum=total;
newObject.average=(total/array.length). toFixed(2);
newObject.min=Math.min(...array)
newObject.max=Math.max(...array)
return newObject
}
console.log(arrayStat([1,2,3,4,5]))