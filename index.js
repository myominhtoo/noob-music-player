//declaring variables for stop ,pause audieo
var play = document.querySelector(".play");
var pause = document.querySelector(".pause");
var audio = document.querySelector("#audio");

var container = document.getElementById("container");// declaration for container
var musicImg = document.querySelector(".music-img");// for musicImg


// background-color changing

var bodyBg = () => {
    document.body.style.background = `hsl(${Math.floor(Math.random()*360)},100%,50%)`;
}

setInterval(bodyBg,5000);

play.addEventListener('click',
() => {
    play.style.display = "none";
    pause.style.display = "inline";
    musicImg.style.animationName = "rotateImg";
    audio.play();
   
    setInterval(flash,6000);
});

pause.addEventListener('click',
() => {
    pause.style.display = "none";
    play.style.display = "inline";
    musicImg.style.animationName = "none";
    audio.pause();
});

// two functions for actions with stop and pause

//musioc address array
var musics = [
    {
        link : "./audios/animals.mp3",
        img  : "./imgs/animals.jpg"
    },
    {
        link : "./audios/blankspace.mp3",
        img  : "./imgs/blankspace.jpg"
    },
    {
        link : "./audios/girlonfire.mp3",
        img  : "./imgs/girlonfire.jpg"
    },
    {
        link : "./audios/intentions.mp3",
        img  : "./imgs/intentions.jpg"
    },
    {
        link : "./audios/mood.mp3",
        img  : "./imgs/mood.jpg"
    },
    {
        link : "./audios/onemorenight.mp3",
        img  : "./imgs/onemorenight.jpg"
    },
    {
        link : "./audios/shallow.mp3",
        img  : "./imgs/shallow.jpg"
    },
    {
        link : "./audios/stay.mp3",
        img  : "./imgs/stay.jpg"
    }
];

// declaring index for array to adjust
var index = 0;
// declaring selection for next and prev
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
// console.log(musicImg);

//flash light box shadow for music-img

let flash = () => {
    let color = `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},1)`;
    musicImg.style.boxShadow = `0px 0px 10px ${color}`;
    musicImg.style.boxShadow = `0px 0px 12px ${color}`;
}

//forward action
    prev.addEventListener("click",
        () => {
            index--;

            if(index < 0) index = musics.length - 1;

            audio.src = `${musics[index].link}`;
            container.style.background = `url(${musics[index].img})`;
            container.style.backgroundSize = "cover";
            container .style.backgroundRepeat = "no-repeat";
            container.style.backgroundPosition = "center";
            musicImg.style.background = `url(${musics[index].img})`;
            musicImg.style.background = `url(${musics[index].img})`;
            musicImg.style.backgroundSize = "cover";
            musicImg.style.backgroundRepeat = "no-repeat";
            musicImg.style.backgroundPosition = "center";

           if(pause.style.display === "inline"){
                musicImg.style.animationName = "rotateImg";
                setInterval(flash,6000);
                audio.play();
           }
           else{
               audio.pause();
           }
    });

//forward action
    next.addEventListener("click",
    () => {
        index++;

        if(index > musics.length-1) index = 0;;

        audio.src = `${musics[index].link}`;
        container.style.background = `url(${musics[index].img})`;
        container.style.backgroundSize = "cover";
        container .style.backgroundRepeat = "no-repeat";
        container.style.backgroundPosition = "center";
        musicImg.style.background = `url(${musics[index].img})`;
        musicImg.style.background = `url(${musics[index].img})`;
        musicImg.style.backgroundSize = "cover";
        musicImg.style.backgroundRepeat = "no-repeat";
         musicImg.style.backgroundPosition = "center";
        
        if(pause.style.display === "inline"){
            musicImg.style.animationName = "rotateImg";
            setInterval(flash,6000);
            audio.play();
       }
        else{
           audio.pause();
        }
    });