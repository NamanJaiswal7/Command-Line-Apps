let fs=require("fs");
let path=require("path");


function numberAllLine(pathToFile){
let newStr="1.";
let line=2;
let str=fs.readFileSync(pathToFile,"utf8");
for(let i=0;i<str.length;i++){
if(str[i]=="\n"){
  newStr+=str[i]+line+". ";
  line++;
}else{
  newStr+=str[i];
}

}
return newStr;
}

let input=process.argv.slice(2);
let FilePath=input[0];
console.log(numberAllLine(FilePath));
