console.log("Welcome to Music");
let songIndex = 0;
let audioElement = new Audio(`songs3/${songIndex + 21}.mp3`); 
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs3 = [
    {songName: "Ye Tune Kya Kiya - Pritam", filePath: "songs3/21.mp3", coverPath: "covers3/1.jpg"},
    {songName: "Khud ko Tere - Chirrantan Bhatt", filePath: "songs3/22.mp3", coverPath: "covers3/2.jpg"},
    {songName: "Baarish - Mithoon", filePath: "songs3/23.mp3", coverPath: "covers3/3.jpg"},
    {songName: "Ishq - Faheem Abdullah", filePath: "songs3/24.mp3", coverPath: "covers3/4.jpg"},
    {songName: "Husn - Anuv Jain", filePath: "songs3/25.mp3", coverPath: "covers3/5.jpg"},
    {songName: "Ae Dil Hai Mushkil - Pritam, Arjit Singh", filePath: "songs3/26.mp3", coverPath: "covers3/6.jpg"},
    {songName: "Hamari Adhuri Kahani - Arjit Singh", filePath: "songs3/27.mp3", coverPath: "covers3/7.jpg"},
    {songName: "Hasi - Shreya Ghoshal", filePath: "songs3/28.mp3", coverPath: "covers3/8.jpg"},
    {songName: "Pal - Javed Moshsin", filePath: "songs3/29.mp3", coverPath: "covers3/9.jpg"},
    {songName: "Duniyaa - Akhil", filePath: "songs3/30.mp3", coverPath: "covers3/10.jpg"},
]

songItems.forEach((element, i) => { 
    element.getElementsByTagName("img")[0].src = songs3[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs3[i].songName; 
});

masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate', () => { 
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100); 
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, index) => {
    element.addEventListener('click', (e) => { 
        makeAllPlays();
        songIndex = index;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs3[songIndex].filePath;
        masterSongName.innerText = songs3[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

document.getElementById('next').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs3.length;
    audioElement.src = songs3[songIndex].filePath;
    masterSongName.innerText = songs3[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs3.length) % songs3.length;
    audioElement.src = songs3[songIndex].filePath;
    masterSongName.innerText = songs3[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
