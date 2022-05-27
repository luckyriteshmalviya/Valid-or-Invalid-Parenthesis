

var s = "(){}}{"   //ans.  6
var arr = [...s]
var stack = [];
var count = 0;
for (let i=0; i<arr.length; i++){
    stack.push(arr[i]);
 for (j=0; j<arr.length; j++){
 if (stack[j]=="(" && stack[j+1]==")"){
     count+=2;
     stack.splice(j,2);
 }

 if (stack[j]=="{" && stack[j+1]=="}"){
    count+=2;
    stack.splice(j,2);
}

if (stack[j]=="[" && stack[j+1]=="]"){
    count++
    stack.splice(j,2);
}
}}
if (count>0){
   console.log(true) ;
}
else{
    console.log(false);
}