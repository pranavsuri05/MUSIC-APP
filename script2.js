console.log("Welcome to Music");
let song2Index = 0;
let audioElement = new Audio('song2/11.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let song2 = [
    {songName: "Malang Sajna - Sachet Parampara", filePath: "song2/11.mp3", coverPath: "covers2/1.jpg"},
    {songName: "Ilahi - Arjit Singh", filePath: "song2/12.mp3", coverPath: "covers2/2.jpg"},
    {songName: "Senorita - Shankar-Ehsaan", filePath: "song2/13.mp3", coverPath: "covers2/3.jpg"},
    {songName: "Dil Dhadakne Do - Shanker-Ehsaan", filePath: "song2/14.mp3", coverPath: "covers2/4.jpg"},
    {songName: "Offo - Shanker-Ehsaan", filePath: "song2/15.mp3", coverPath: "covers2/5.jpg"},
    {songName: "Sooraj Dooba Hain - Ammal Malik, Arjit Singh", filePath: "song2/16.mp3", coverPath: "covers2/6.jpg"},
    {songName: "Tum Se - Sachin-Jigar", filePath: "song2/17.mp3", coverPath: "covers2/7.jpg"},
    {songName: "Tauba Tauba - Karan Aujla", filePath: "song2/18.mp3", coverPath: "covers2/8.jpg"},
    {songName: "Subah Subah - Prakriti Kakar, Arjit Singh", filePath: "song2/19.mp3", coverPath: "covers2/9.jpg"},
    {songName: "Dil Chori - Honey Singh", filePath: "song2/20.mp3", coverPath: "covers2/10.jpg"},
]

songItems.forEach((element, i) => { 
    element.getElementsByTagName("img")[0].src = song2[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = song2[i].songName; 
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
        song2Index = index;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = song2[song2Index].filePath;
        masterSongName.innerText = song2[song2Index].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

document.getElementById('next').addEventListener('click', () => {
    song2Index = (song2Index + 1) % song2.length;
    audioElement.src = song2[song2Index].filePath;
    masterSongName.innerText = song2[song2Index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click', () => {
    song2Index = (song2Index - 1 + song2.length) % song2.length;
    audioElement.src = song2[song2Index].filePath;
    masterSongName.innerText = song2[song2Index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
