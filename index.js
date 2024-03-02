let input = document.querySelector("input");
let comment = document.querySelector("#comment");

input.addEventListener("keydown",(event)=>{
    let str = input.value;
    
    console.log(str.length);
    if(str.length==0){
        input.style.borderColor="white";
        comment.style.color = "white";
        comment.innerHTML="";
    }
    if(str.length>0 && str.length<=5){
        input.style.borderColor="red";
        comment.style.color = "red";
        comment.innerHTML="Password is weak";
    }
    else if(str.length>5 && str.length<=10){
        input.style.borderColor="yellow";
        comment.style.color = "yellow";
        comment.innerHTML="Password is medium";
    }
    else if(str.length>10){
        input.style.borderColor="green";
        comment.style.color = "green";
        comment.innerHTML="Password is strong";
    }
})