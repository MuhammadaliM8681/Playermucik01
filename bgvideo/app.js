//auduo.volume = 0.2 // ovoz balandligi
// auduo.playbackRate = 5 // player tezligi
//auduo.duration // audio davomiyligi

const video = document.querySelector("video");
const audio = document.querySelector("audio");
const oldinga = document.querySelector(".oldinga");
const orqaga = document.querySelector(".orqaga");
const pause = document.querySelector(".pause");
const start = document.querySelector(".start");
const input = document.querySelector("input");
const output = document.querySelector("output");
const images = document.querySelector(".audio_img");
const time_audio = document.querySelector(".time");
const after = document.querySelector(".after");
console.log(video.getAttribute("src"));

// ovoz
 output.textContent = Math.trunc(Number(input.value)) 
input.addEventListener("input" , (e) =>{
    e.stopPropagation()
    g = e.target.value 
    g = Math.trunc(Number(g))
    output.textContent = g
    audio.volume = g/10
})


video.volume = 0

// audio.autoplay = true
var a = 0;
var b = 0;
var c = 1;
var d = 0;
var ran = 0;
var videos = video.getAttribute("src");
var video1 =0;
var video2 = 0;
var videon = 0;

// oldinga operatori

oldinga.addEventListener("click", (e) =>{
    audio.autoplay = true
    e.stopPropagation()
    video.autoplay = true
    royhat = audio.getAttribute("src") 
    raqami1 = royhat.slice(7,8);
    raqami2 = royhat.slice(7,9);
    raqamiN = royhat.slice(8,9);

    videos = video.getAttribute("src");
    video1 = videos.slice(8,9);
    video2 = videos.slice(8,10);
    videon = videos.slice(9,10);

    // vodeos
    if(videon == "."){
        d = Number(video1) 
        d++
        video.setAttribute("src", `/video/v${d}.mp4`);
        // images.style.backgroundimage = `url("/audio_images/1.PNG")`;
        video.play()
    }else if(videon != "."){
        d = Number(video2) > 19 ? Number(video2) = 20 : Number(video2);
        d++
        video.play()
        video.setAttribute("src", `/video/v${d}.mp4`);
    }else{
        video.play()
    }
    // if(d == "-1" || d == "20"){
    //     video.play()
    //     d = 0
    // }
    // images
    if(ran <= 20){
        ran++
        images.classList.add(`img${ran}`);
        images.classList.remove(`img${ran-1}`);
        images.classList.remove(`img${ran+1}`);
        images.classList.add(`animo`);
        
    }else if(ran>20){
        ran = 0
        images.classList.remove(`img${20}`);
        images.classList.add(`animo`);
        images.classList.add(`img${0}`);
    }

    // muzik
    if(raqamiN == "."){
        a = Number(raqami1);
        a++
        audio.setAttribute("src", `/music/${a}.mp3`)
        audio.play()
    // images.style.backgroundimage = `url("/audio_images/1.PNG")`;
    }else if(raqamiN != "."){
    audio.play()
        a = Number(raqami2);
        a++
        audio.setAttribute("src", `/music/${a}.mp3`)
    }else if(a == "-1"){
        audio.play()
        a = 0
    }
    console.log("salo")
    pause.classList.remove("hidden");
    start.classList.add("hidden")
})


// ortga operatori


orqaga.addEventListener("click", (e)=>{
    e.stopPropagation()
    audio.autoplay
    video.autoplay = true
    royhat = audio.getAttribute("src") 
    raqami1 = royhat.slice(7,8);
    raqami2 = royhat.slice(7,9);
    raqamiN = royhat.slice(8,9);
    
    videos = video.getAttribute("src");
    video1 = videos.slice(8,9);
    video2 = videos.slice(8,10);
    videon = videos.slice(9,10);
    // vodeos
    if(videon == "."){
        d = Number(video1) < 2 ? Number(video1) = 1 : Number(video1);
        d--
        video.setAttribute("src", `/video/v${d}.mp4`);
        // images.style.backgroundimage = `url("/audio_images/1.PNG")`;
        // video.pause()
    }else if(videon != "."){
        d = Number(video2);
        d--
        // video.pause()
        video.setAttribute("src", `/video/v${d}.mp4`);
    }else if(d == "-1" || d == "20"){
        d = 0
    }
    // images
    if(ran <= 20){
        ran--
        images.classList.remove(`animo`);
        images.classList.add(`img${ran}`);
        images.classList.remove(`img${ran-1}`);
        images.classList.remove(`img${ran+1}`);
    }else if(ran<1){
        ran = 1
        images.classList.remove(`animo`);
        images.classList.remove(`img${0}`);
        images.classList.add(`img${1}`);
    }
    
    // muzik
    if(raqamiN == "." && Number(raqami1)>0){
        audio.play()
        b = Number(raqami1);
        b--
        audio.setAttribute("src", `/music/${b}.mp3`);
    }else if(raqamiN != "."){
        audio.play()
        b = Number(raqami2);
        b--
        audio.setAttribute("src", `/music/${b}.mp3`)
    }
   
        images.classList.add(`animo`);
        // pause.classList.add("hidden");
    // start.classList.remove("hidden")
})



start.addEventListener("click", (e)=>{
    e.stopPropagation()
    // times = audio.duration
    // times = Math.trunc(times/60)
    // console.log(times)
    // time.textContent = 
    // audio.autoplay = true
        images.classList.add(`animo`);
        video.play()
    pause.classList.remove("hidden");
    start.classList.add("hidden")
    audio.play()
})

pause.addEventListener("click", (e)=>{
    e.stopPropagation()
    audio.pause()
    video.pause()
        images.classList.remove(`animo`);
        pause.classList.add("hidden");
    start.classList.remove("hidden")
})

var time_s = 0;
var time_m = 0;

function timefunc(){
  setInterval(() =>{
    var time_s = Math.trunc(audio.currentTime) < 10 ? "0"+ Math.trunc(audio.currentTime) : Math.trunc(audio.currentTime)
    if(time_s == 60 || time_s == 120 || time_s == 180){
        time_m++
        time_m < 10 ? "0" + time_m : time_m 
        time_audio.textContent = `${time_m} / ${time_s} `
    }else{
        time_audio.textContent = `${time_m} / ${time_s} `
    }
  }, 1000)
}

timefunc()

