
let arr=['mangoes','pineaples','banana','mangoes'];
let newArr=[];

  for(let i=0;i<arr.length ;i++){
   if(!newArr.includes(arr[i])){
    newArr.push(arr[i])}
  }

    
    
  console.log(newArr)