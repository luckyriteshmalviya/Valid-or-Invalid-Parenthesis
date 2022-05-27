

var str = "{[]}";
var arr = [...str];
var stack = [];
for (let i=0; i<arr.length; i++){
       stack.push(arr[i]);
    console.log("ln08:", stack,[i]);


    if ((stack.includes("(")) && (arr[i+1]==")")){
        stack.push(arr[i+1]);
        
    console.log("ln14:", stack,[i]);
        stack.pop();
        stack.pop();
        arr.slice(i+1);
        
    console.log("ln18:", stack,[i]);
        // i+=1;
    }


    if ((stack.includes("{")) && (arr[i+1]=="}")){
        stack.push(arr[i+1]);
        console.log("ln25:", stack,[i]);
        stack.pop();
        stack.pop();
        arr.slice(i+1);
        console.log("ln28:", stack,[i]);
    }


    if ((stack.includes("[")) && (arr[i+1]=="]")){
        stack.push(arr[i+1]);
    console.log("ln36:", stack,[i]);
        stack.pop();
        stack.pop();
        arr.splice((arr.indexOf("[")),1);
        arr.splice((arr.indexOf("]")),1);
        console.log("arr",arr);
    console.log("ln41:", stack,[i]);
            i=i-1;
    }}
if (stack.length == 0){
    console.log(true);
}
else{
    console.log(false);
}