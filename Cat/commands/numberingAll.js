let fs=require("fs");
let path=require("path");

function call(pathf){
  try{

    console.log(numberAllLine(pathf));
  }catch(err){
    console.log("file does not exist error");
  }
}


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
module.exports={
  numberingAll:call
}
