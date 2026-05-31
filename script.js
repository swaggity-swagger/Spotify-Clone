console.log("Welcome to Spotify");


let songIndex = 0;

let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Dumbo-Travis Scott", filePath: "Travis Scott - DUMBO [8G8Fn0YRjvM].mp3", coverPath: "1.png"},
    {songName: "Faith-The Weeknd", filePath: "The Weeknd - Faith (Audio) [RcS_8-a-sMg].mp3", coverPath: "2.png"},
    {songName: "Die For You-The Weeknd", filePath: "The Weeknd - Die For You [uPD0QOGTmMI].mp3", coverPath: "3.png"},
    {songName: "Second Hand-Don Toliver", filePath: "Secondhand (feat. Rema) [iHLsnHMVXck].mp3", coverPath: "4.png"},
    {songName: "Kiss Of Life-Sade", filePath: "Sade - Kiss Of Life - Official - 1993 [MmOau-PMWJk].mp3", coverPath: "5.png"},
    {songName: "California Gurls-Katy Perry", filePath: "Katy Perry - California Gurls (Lyrics) Feat. Snoop Dogg [S-fe9T28VLM].mp3", coverPath: "6.png"},
    {songName: "Cant Tell Me Nothing-Kanye West", filePath: "Kanye West - Can't Tell Me Nothing [E58qLXBfLrs].mp3", coverPath: "7.png"},
    {songName: "I Want It That Way-Backstreet Boys ", filePath: "Backstreet Boys - I Want It That Way (Official HD Video) [4fndeDfaWCg].mp3", coverPath: "9.png"},
    {songName: "Bound 2-Kanye West", filePath: "Kanye West - Bound 2 [BBAtAM7vtgc].mp3", coverPath: "8.png"},
    {songName: "E85 Don Toliver", filePath: "Don Toliver - E85 [Official Visualizer] [7GwLnsVUwHY].mp3", coverPath: "10.png"},
]

let audioElement = new Audio(songs[0].filePath);

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{ 

    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
       audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
   audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
