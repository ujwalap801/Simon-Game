let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function()
{
   if(started == false)
   {
    console.log("game is started");
    started=true;
    levelup();
   }
});


function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
    {
        btn.classList.remove("flash");
    },250);
};

function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function()
    {
        btn.classList.remove("userflash");
    },250);
}


function levelup()
{
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
//random btn choose

let randIdx=Math.floor(Math.random()*3);
let randcolor=btns[randIdx];
let randbtn=document.querySelector(`.${randcolor}`);
// console.log(randcolor);
// console.log(randIdx);
// console.log(randbtn);
gameseq.push(randcolor);
console.log(gameseq);
gameFlash(randbtn);
}

function checkans(idx){
//    console.log("curre level:",level);/

if(userseq[idx] == gameseq[idx])
{
 if(userseq.length == gameseq.length)
 {
 setTimeout(levelup,1000)
 
    levelup();
 }
}
else
{
    h2.innerHTML=`game over! your score was <b>${level}</b> <br>press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    }, 150);
    reset();
}
}

function btnpress(){
    // console.log(this)
   let btnr=this;
   userFlash(btnr);
   
   usercolor=btnr.getAttribute("id");
  console.log(usercolor);
   userseq.push(usercolor);
   checkans(userseq.length-1);

}


let alltbtns=document.querySelectorAll(".btn")
for(btn of alltbtns)
{
    btn.addEventListener("click",btnpress);
}

function reset()
{
    started==false;
    gameseq=[];
    userseq=[];
    level=0;
}