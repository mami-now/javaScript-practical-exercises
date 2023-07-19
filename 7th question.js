function Oddsquare(arr){
  let filtered= arr.filter(a => a%2!==0)

return filtered.map(number=>Math.pow(number,2))
}

console.log(Oddsquare([1,2,,3,4,5]));
