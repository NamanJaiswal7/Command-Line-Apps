let fs=require("fs");
let path=require("path");

function call(arra){
  try{

    console.log(displayAllCon(arra));
  }catch{
    console.log("File not exits")
  }
}


function displayAllCon(arr){
  str="";
for(let i=0;i<arr.length;i++){
  str+=fs.readFileSync(arr[i],"utf8");
}
return str;
}

module.exports={
  dis:call
}