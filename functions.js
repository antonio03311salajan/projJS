let delays=[1,0.5,0.5];
const ONE_SECOND=1000;
const ANIMATION_TIME=1000;
function removeDirections(btn,directions){
    directions.forEach(function(direction){
        btn.classList.remove(direction);
    })
}

function moveBtnRed(btn){
    btn.style.zIndex="2";
    setTimeout(()=>{
        btn.classList.add("move__left-right");
    },0)
    setTimeout(()=>{
        btn.classList.add("move__right-left");
        btn.style.zIndex="1";
    },ANIMATION_TIME + ONE_SECOND)
    setTimeout(()=>{
        removeDirections(btn,["move__left-right","move__right-left"]);
    },ANIMATION_TIME * 2 + ONE_SECOND)
}

function moveBtnGreen(btn,direction){
    btn.style.zIndex="2";
    if(!direction){
        removeDirections(btn,["move__secondary__bottom-up","move__secondary__top-down"]);
        setTimeout(() => {
            btn.classList.add("move__secondary__top-down");
        },0)
    }else{
        setTimeout(() => {
            btn.classList.add("move__secondary__bottom-up");
            btn.style.zIndex="1";
        },0)
    }
}

function calcDelays(delays){
    let calcedDelays=[];
    delays.forEach((delay,index)=>{
        if(index===0){
            calcedDelays[index] = delay * 1000 + ANIMATION_TIME;
        }
        else{
            calcedDelays[index] = calcedDelays[index-1] + delay * 1000 +ANIMATION_TIME;
        }
    })
    return calcedDelays;
}

let calcedDelays=calcDelays(delays);

function moveBtnBlue(btn,calcedDelays){
    btn.style.zIndex="2";
    console.log(calcedDelays)
    setTimeout(()=>{
        btn.classList.add("move__left-right");
    },0);
    setTimeout(()=>{
        btn.classList.add("move__bottom-up");
    },calcedDelays[0]);
    setTimeout(()=>{
        btn.classList.add("move__right-left-up");
    },calcedDelays[1]);
    setTimeout(()=>{
        btn.classList.add("move__top-bottom");
        btn.style.zIndex="1";
    },calcedDelays[2]);
    setTimeout(()=>{
        removeDirections(btn,["move__left-right","move__bottom-up","move__right-left-up","move__top-bottom"]);
    },calcedDelays[2]+ANIMATION_TIME);
}

function moveBtnYellow(btn){
    btn.style.zIndex="2";
    removeDirections(btn,["move__primary__bottom-up","move__primary__top-down"]);
    setTimeout(()=>{
        btn.classList.add("move__primary__bottom-up");
    },ANIMATION_TIME);
    setTimeout(()=>{
        btn.classList.add("move__primary__top-down");
        btn.style.zIndex="1";
    },ANIMATION_TIME * 2);
}