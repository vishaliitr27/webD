console.log("welcome to spotify"); 
// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');



let song = [
    {songName: "new song" , filePath:"song/1.mp3",coverPath: "cover/1.jpg"},
    {songName: "new song" , filePath:"song/1.mp3",coverPath: "cover/1.jpg"},
    {songName: "new song" , filePath:"song/1.mp3",coverPath: "cover/1.jpg"},
    {songName: "new song" , filePath:"song/1.mp3",coverPath: "cover/1.jpg"},
    {songName: "new song" , filePath:"song/1.mp3",coverPath: "cover/1.jpg"},
    {songName: "new song" , filePath:"song/1.mp3",coverPath: "cover/1.jpg"},
    {songName: "new song" , filePath:"song/1.mp3",coverPath: "cover/1.jpg"},
    {songName: "new song" , filePath:"song/1.mp3",coverPath: "cover/1.jpg"},
    {songName: "new song" , filePath:"song/1.mp3",coverPath: "cover/1.jpg"},
    {songName: "new song" , filePath:"song/1.mp3",coverPath: "cover/1.jpg"},


]
//handle play/pause click

masterPlay.addEventListener('click',()=>{
    if(audioElement.pause || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;

    }
    else{audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity = 0;

    }
})
//listen to events
audioElement.addEmentListener('timeupdate',()=>{
    console.log("timeupdate");
})

