let fs=require("fs");
let path=require("path");

function displayAllCon(arr){
  str="";
for(let i=0;i<arr.length;i++){
  str+=fs.readFileSync(arr[i],"utf8");
}
return str;
}

let input=process.argv.slice(2);
console.log(displayAllCon(input));