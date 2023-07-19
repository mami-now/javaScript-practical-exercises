function myString(str){
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
}
console.log(myString( "I am the good boy"))