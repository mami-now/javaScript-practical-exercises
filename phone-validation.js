function validatePhoneNumber(str){
  const phoneLengh=str.replaceAll(' ','').replaceAll('-','').length;
if(
  (str.indexOf('-')===3 && str.lastIndexOf('-')===7) || (str.indexOf(' ')===3 && str.lastIndexOf(' ')===7)|| phoneLengh===10
  ){
return true
}
else{
  return false
}}
console.log(validatePhoneNumber("0789534004"));