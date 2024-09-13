let box1=document.querySelectorAll(".box");
let btn1=document.querySelector("#btn");
let zero11=document.querySelector(".zero1")
let zero22=document.querySelector(".zero2")
let butt11=document.querySelector("#butt1");
let userscore=0;
let compscore=0;

const reset=()=>{
        zero11.innerText=0;
        zero22.innerText=0;
        userscore=0;
        compscore=0;
    };
butt11.addEventListener("click",reset);
butt11.style.backgroundColor="pink";
butt11.style.color="black";

const drawgame=()=>{
     btn1.style.color="black"
     btn1.style.backgroundColor="yellow";
     btn1.innerText="Draw match!"  
}
const showwinner=(userwin)=>{
    if(userwin){
         userscore++;
         zero11.innerText=userscore;
         btn1.style.color="white"
         btn1.style.backgroundColor="green";
       btn1.innerText="you win!"
    }else{
        compscore++;
        zero22.innerText= compscore;
        btn1.style.color="white"
        btn1.style.backgroundColor="red"
        btn1.innerText="you lose.." 
    }
}
 


const gencomputer=()=>{
    let options=["rock","paper","scissor"]
    let index=Math.floor(Math.random()*3);
    return options[index];   
}


const playgame=(userchoice)=>{
   console.log("it was userchoice",userchoice);
   //generate computer
  let computer= gencomputer();  
  console.log("it was computer choice",computer);
  if(userchoice===computer){
    drawgame(); 
    
  }else{
    let userwin=true;
    if(userchoice==="paper"){
        //scissor,rock
         userwin=computer==="scissor"? false:true;
      }else if(userchoice==="scissor"){
        //rock,paper
          userwin=computer==="rock"? false:true;
      }else {
            //scissor,paper
            userwin=computer==="paper"?false:true;
      }
      showwinner(userwin);
  } 
}



box1.forEach((box)=>{
box.addEventListener("click",()=>{
    let userchoice=box.getAttribute("id")
    playgame(userchoice);
});    
});