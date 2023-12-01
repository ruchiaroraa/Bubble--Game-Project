var timer = 60;
var score = 0;
var hitrandom = 0;

 // jispe click kroge vo element par event raise hoga,
//   aur event listener naa milne par event element ke 
// parent par listener dhundega waha bhi naa milne par 
//  event parent ke parent pr listener dhundega
// so the parent of bubble here is panel bottom.

function makebubble (){
var clutter = "";

for(var i=1; i<=147; i++){
    clutter += `<div class="bubble"> ${Math.floor(Math.random()*10)} </div>`
}

document.querySelector("#panelbottom").innerHTML = clutter;
}

function runtimer(){
     var timeinterval = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timeinterval);
            document.querySelector("#panelbottom").innerHTML=`
            <div>
            <h2>Game over🥱</h2> 
            <h3>Score : ${score}</h3> 
            </div>`;
        }
       
    },1000)

}



function getNewHit(){
    hitrandom = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrandom;
}

function increasescore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#panelbottom")
.addEventListener("click",function(details){
    var clickednum = Number(details.target.textContent)
    if(clickednum === hitrandom){
       increasescore(); 
       makebubble();
       getNewHit();
    }


    //target means its get clicked details is variable here.
// its showing <div class="bubble">5</div> so for getting
// 5 out of this we used textContent here . 
// blue in console is number and black in console is string
})

runtimer();
makebubble();
getNewHit();
