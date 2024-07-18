const btnRed=document.querySelector('#red');
const btnGreen=document.querySelector('#green');
const btnBlue=document.querySelector('#blue');
const btnYellow=document.querySelector('#yellow');
let direction=false;
window.addEventListener("click", (e) => {
    if(e.target.id==="red"){
        moveBtnRed(btnRed);
    }
    else if(e.target.id==="green"){
        moveBtnGreen(btnGreen,direction);
        direction=!direction;
    }
    else if(e.target.id==="blue" ){
        moveBtnBlue(btnBlue,calcedDelays);
    }
    else if(e.target.id==="yellow"){
        moveBtnYellow(btnYellow);
    }
})