
var str = "{[}]";
var arr = [...str];
var stack = [];
for (let i=0; i<arr.length; i++){
           stack.push(arr[i]);
           console.log("ln07:",stack);
       

    for (j=i; j<arr.length; j++){
       arr= arr.slice(j);
       console.log("slice", arr);
        if (( stack.includes("(")) && (arr.includes(")"))){
            
        stack.push(arr[arr.indexOf(")")]);
        console.log("ln16:",stack);
        stack.pop();
        stack.pop();
        console.log("ln19:",stack);
    }
    if (( stack.includes("{")) && (arr.includes("}"))){
        
    stack.push(arr[arr.indexOf("}")]);
    console.log("ln24:",stack);
    console.log("ln25:",stack);
    stack.pop();
    stack.pop();
    console.log("ln28:",stack);
    console.log("ln29:",stack);
    }

    if(( stack.includes("[")) && (arr.includes("]"))){
            console.log("rtrtr");
        stack.push(arr[arr.indexOf("]")]);
        console.log("ln35:",stack);
        stack.pop();
        stack.pop();
        console.log("ln38:",stack);
    }   
}}

if (stack.length == 0){
    console.log(true);
}
else{
    console.log(false);
}
