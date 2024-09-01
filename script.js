const mainCard = document.querySelector("#ContentWarpper");
const songImg = document.querySelector("#SongImg");
const controlButtons = document.querySelector(".control");
const currentYear = new Date().getFullYear();

const playPauseButton = document.querySelector("#PausePlay");
const audio = document.querySelector("audio");
const artist = document.querySelector("#Artist");
const songName = document.querySelector("#SongName");
const previousButton = document.querySelector("#Previous");
const nextButton = document.querySelector("#Next");
const songImgAtTheTop = document.querySelector("img");

let startDuration = document.querySelector("#Start");
const endDuration = document.querySelector("#End");
const meter = document.querySelector("#ProgrssMeterChild");
const progressBar = document.querySelector("#ProgressMeterContainer");

let isPlaying = false;
let index = 0;

const songDataBase = [
  {
    songSrc: "./music/music1.mp3",
    title: "Shri Ram Janki",
    artist: "Lakhbir Singh Lakkha",
    imgSrc: "./img/music.jpg",
  },
  {
    songSrc: "./music/music2.mp3",
    title: "Chlate chalte yu hi",
    artist: "Arunati Roy",
    imgSrc: "./img/music.jpg",
  },
  {
    songSrc: "./music/music3.mp3",
    title: "Zalimaa",
    artist: "Arijit Singh",
    imgSrc: "./img/music.jpg",
  },
  {
    songSrc: "./music/music4.mp3",
    title: "Pal pal dil ke paas",
    artist: "Parampra Thakur",
    imgSrc: "./img/music.jpg",
  },
  {
    songSrc: "./music/music5.mp3",
    title: "Tu hi hai aashiqui ",
    artist: "Arijit Singh",
    imgSrc: "./img/music.jpg",
  },
  {
    songSrc: "./music/music6.mp3",
    title: "Yeh Ishq Samajh Na Aye",
    artist: "Rahat Fateh Ali Khan",
    imgSrc: "./img/music.jpg",
  },
  {
    songSrc: "./music/music7.mp3",
    title: "Gulab Jaisan Khilal Badu",
    artist: "Neelkamal Singh",
    imgSrc: "./img/music.jpg",
  },
  {
    songSrc: "./music/music8.mp3",
    title: "Dheere Dheere Se",
    artist: "Honey Singh",
    imgSrc: "./img/music.jpg",
  },
  {
    songSrc: "./music/music9.mp3",
    title: "Kesariya",
    artist: "Arijit Singh",
    imgSrc: "./img/music.jpg",
  },
  {
    songSrc: "./music/music10.mp3",
    title: "Pyaar Hota Kayi Baar Hai",
    artist: "Amitabh Bhattacharya",
    imgSrc: "./img/music.jpg",
  },
  {
    songSrc: "./music/music11.mp3",
    title: "Bulleya",
    artist: "Shilpa Rao",
    imgSrc: "./img/music.jpg",
  },
  {
    songSrc: "./music/music12.mp3",
    title: "Dil Mein Ho Tum",
    artist: "Armaan Malik",
    imgSrc: "./img/music.jpg",
  },
  {
    songSrc: "./music/music13.mp3",
    title: "Piya More ",
    artist: "Mika Singh , Neeti Mohan",
    imgSrc: "./img/music.jpg",
  },
  {
    songSrc: "./music/music14.mp3",
    title: "ANKHIYON KE JHAROKHON SE",
    artist: "DEEPSHIKHA RAINA",
    imgSrc: "./img/music.jpg",
  },
  {
    songSrc: "./music/music15.mp3",
    title: "Rafta Rafta",
    artist: "Atif Aslam",
    imgSrc: "./img/music.jpg",
  },
  {
    songSrc: "./music/music16.mp3",
    title: "Hue Bechain",
    artist: "Palak Mucchal , Yasir Desai",
    imgSrc: "./img/music.jpg",
  },
  {
    songSrc: "./music/music17.mp3",
    title: "Parda",
    artist: "Pritam",
    imgSrc: "./img/music.jpg",
  },
  {
    songSrc: "./music/music18.mp3",
    title: "Raabta",
    artist: "Arijit Singh",
    imgSrc: "./img/music.jpg",
  },
  {
    songSrc: "./music/music19.mp3",
    title: "Kya Ye Mera Pehla Pehla Pyar Hai",
    artist: "",
    imgSrc: "./img/music.jpg",
  },
  {
    songSrc: "./music/music20.mp3",
    title: "Bom Diggy Diggy",
    artist: "Zack Knight , Jasmin Walia",
    imgSrc: "./img/music.jpg",
  },{
    songSrc: "./music/music21.mp3",
    title: "Manike",
    artist: "Tanishk , Yohani , Jubin",
    imgSrc: "./img/music.jpg",
  },
];

const loadMusic = () => {
  audio.src = songDataBase[index].songSrc;
  artist.textContent = songDataBase[index].artist;
  songName.textContent = songDataBase[index].title;
  songImgAtTheTop.src = songDataBase[index].imgSrc;
};
audio.addEventListener("ended", () => {
  loadMusic(index++);
  play();
});

loadMusic();

nextButton.addEventListener("click", () => {
  if (index < songDataBase.length - 1) {
    loadMusic(index++);
    play();
  } else {
    pause();
  }
});
previousButton.addEventListener("click", () => {
  if (index > 0) {
    loadMusic(index--);
    play();
  } else {
    pause();
  }
});

const play = () => {
  isPlaying = true;
  audio.play();
  playPauseButton.classList.replace("fa-play", "fa-pause");
  songImg.classList.add("anime");
};
const pause = () => {
  isPlaying = false;
  audio.pause();
  playPauseButton.classList.replace("fa-pause", "fa-play");
  songImg.classList.remove("anime");
};

playPauseButton.addEventListener("click", () => {
  if (isPlaying) {
    pause();
  } else {
    play();
  }
});
let minute, second;
const timeStamp = (event) => {
  let { duration, currentTime } = event.srcElement;
  const full_second = Math.floor(duration % 60);
  const full_minute = Math.floor(duration / 60);
  const start_second = Math.floor(currentTime % 60);
  const start_minute = Math.floor(currentTime / 60);
  const totalDuration = `${full_minute} : ${full_second}`;
  const currenDuration = `${start_minute} : ${start_second}`;
  if (duration) {
    endDuration.textContent = totalDuration;
  }
  startDuration.textContent = currenDuration;
  const percentage = (currentTime / duration) * 100;
  meter.style.width = `${percentage}%`;
};
audio.addEventListener("timeupdate", timeStamp);
progressBar.addEventListener("click", (event) => {
  const { duration } = audio;
  const moreProgress =
    (event.offsetX / event.srcElement.clientWidth) * duration;
  audio.currentTime = moreProgress;
});

document.querySelector("#Year").innerHTML = currentYear;

mainCard.addEventListener("mouseover", (event) => {
  const xAxis = (window.innerWidth / 2 - event.pageX) / 15;
  const yAxis = (window.innerHeight / 2 - event.pageY) / 15;
  mainCard.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  songImg.style.transform = `rotate(${xAxis}deg)`;
  controlButtons.style.transform = `rotate(${xAxis}deg)`;
});
mainCard.addEventListener("mouseleave", () => {
  mainCard.style.transform = "rotateX(0deg) rotateY(0deg)";
  songImg.style.transform = "rotate(0deg)";
  controlButtons.style.transform = "rotate(0deg)";
});
