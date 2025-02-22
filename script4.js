console.log("Welcome to Music");
let songIndex = 0;
let audioElement = new Audio('songs4/31.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs4 = [
    {songName: "Aaj Ki Raat - Sachin-Jigar", filePath: "songs4/31.mp3", coverPath: "covers4/1.jpg"},
    {songName: "Aayi Nahi - Sachin-Jigar", filePath: "songs4/32.mp3", coverPath: "covers4/2.jpg"},
    {songName: "Saturday Saturday - Badshah", filePath: "songs4/40.mp3", coverPath: "covers4/3.jpg"},
    {songName: "Abhi toh Party Shuru Hui Hai - Badshah, Aastha Gill", filePath: "songs4/33.mp3", coverPath: "covers4/4.jpg"},
    {songName: "Antidote - Karan Aujla", filePath: "songs4/34.mp3", coverPath: "covers4/5.jpg"},
    {songName: "Chhote Chhote Peg - Honey Singh", filePath: "songs4/35.mp3", coverPath: "covers4/6.jpg"},
    {songName: "Dilliwali Girlfriend - Pritam, Arijit Singh", filePath: "songs4/36.mp3", coverPath: "covers4/7.jpg"},
    {songName: "Hookah Bar - Vineet Singh", filePath: "songs4/37.mp3", coverPath: "covers4/8.jpg"},
    {songName: "GOAT - Diljit Dosanjh", filePath: "songs4/38.mp3", coverPath: "covers4/9.jpg"},
    {songName: "O Meri Laila - Atif Aslam", filePath: "songs4/39.mp3", coverPath: "covers4/10.jpg"},
];

songItems.forEach((element, i) => { 
    element.getElementsByTagName("img")[0].src = songs4[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs4[i].songName; 
});

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
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
        audioElement.src = songs4[songIndex].filePath;
        masterSongName.innerText = songs4[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

document.getElementById('next').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs4.length;
    audioElement.src = songs4[songIndex].filePath;
    masterSongName.innerText = songs4[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs4.length) % songs4.length;
    audioElement.src = songs4[songIndex].filePath;
    masterSongName.innerText = songs4[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
