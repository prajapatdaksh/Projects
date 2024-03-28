const music = new Audio('mp3/1.mp3');
// music.play();

const songs = [{
        id: 1,
        songsName: `Marke-From.Lover<br>
            <div class="subtitle">Jass Manak, Sharry Nexus</div>`,
        poster: "img/1.jpg"
    },
    {
        id: 2,
        songsName: `Rangrezza-From.Lover<br>
            <div class="subtitle">Atif Aslam</div>`,
        poster: "img/2.jpg"
    },
    {
        id: 3,
        songsName: `Rang Lageya<br>
        <div class="subtitle">Mohit Chauhan, Rochak Kohli</div>`,
        poster: "img/3.jpg"
    },
    {
        id: 4,
        songsName: `Sufna Banke<br>
        <div class="subtitle">Harvi</div>`,
        poster: "img/4.jpg"
    },
    {
        id: 5,
        songsName: `Iktara lofi<br>
        <div class="subtitle">Kavita Seth, Amitabh Bhattacharya</div>`,
        poster: "img/5.jpg"
    },
    {
        id: 6,
        songsName: `Pasoori<br>
        <div class="subtitle">Ali SethixShae Gill</div>`,
        poster: "img/6.jpg"
    },
    {
        id: 7,
        songsName: `No Love<br>
        <div class="subtitle">Shubh</div>`,
        poster: "img/7.jpg"
    },
    {
        id: 8,
        songsName: `If The World Was Ending<br>
        <div class="subtitle">JP Saxe</div>`,
        poster: "img/8.jpg"
    },
    {
        id: 9,
        songsName: `Akhiyan (Mitraz)<br>
        <div class="subtitle">Mitraz</div>`,
        poster: "img/9.jpg"
    },
    {
        id: 10,
        songsName: `As It Was<br>
        <div class="subtitle">Harry Styles</div>`,
        poster: "img/10.jpg"
    },
    {
        id: 11,
        songsName: `Elevated<br>
        <div class="subtitle">Shubh</div>`,
        poster: "img/11.jpg"
    },
    {
        id: 12,
        songsName: `Junoon (Mitraz)<br>
        <div class="subtitle">Mitraz</div>`,
        poster: "img/12.jpg"
    },
    {
        id: 13,
        songsName: `Label Black<br>
        <div class="subtitle">Gupz Sehra</div>`,
        poster: "img/13.jpg"
    },
    {
        id: 14,
        songsName: `This Town<br>
        <div class="subtitle">Niall Horan</div>`,
        poster: "img/14.jpg"
    },
    {
        id: 15,
        songsName: `Top Notch Gabru<br>
        <div class="subtitle">Vicky</div>`,
        poster: "img/15.jpg"
    },
    {
        id: 16,
        songsName: `Gul<br>
        <div class="subtitle">Anuv Jain</div>`,
        poster: "img/16.jpg"
    },
    {
        id: 17,
        songsName: `Zindagi haseen<br>
        <div class="subtitle">Pav Dharia, Vicky Sandhu</div>`,
        poster: "img/17.jpg"
    },
    {
        id: 18,
        songsName: `Chitta<br>
        <div class="subtitle">Sunny Kaushal</div>`,
        poster: "img/18.jpg"
    },
    {
        id: 19,
        songsName: `Pay Phone<br>
        <div class="subtitle">Maroon 5 Ft. Wiz Khalifa</div>`,
        poster: "img/19.jpg"
    }
]




Array.from(document.getElementsByClassName('song_item')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songsName;
});




// masterplay start here 
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active2');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-circle');
    } else {
        music.pause();
        wave.classList.remove('active2');
        masterPlay.classList.add('bi-play-fill')
        masterPlay.classList.remove('bi-pause-circle')
    }
})






const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('song_item')).forEach((el) => {
        el.style.background = "rgba(137, 137, 137, 0)"
    })
}

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el) => {
        el.classList.remove('bi-pause-circle-fill')
        el.classList.add('bi-play-circle')
    })
}






let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
// index++;
// console.log(index);

Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index);
        music.src = `mp3/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-circle');


        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {
                songsName
            } = elss;
            title.innerHTML = songsName;
            // poster_master_play.src = poster
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('song_item'))[index - 1].style.background = "rgba(137, 137, 137, 0.2)";

        makeAllPlays();
        el.target.classList.add('bi-pause-circle-fill')
        el.target.classList.remove('bi-play-circle')
        wave.classList.add('active2');
    });
})




let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];



music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    // console.log(min1);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60)
    let sec2 = Math.floor(music_curr % 60)
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`;



    let progressBar = parseInt((music_curr / music_dur) * 100)
    seek.value = progressBar;
    // console.log(seek.value);

    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;

});


seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})


// let volu = document.getElementsByClassName('volu')
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar');
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down');
        vol_icon.classList.add('bi-volume-mute');
        vol_icon.classList.remove('bi-volume-off');
    }
    if (vol.value > 5) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down');
        vol_icon.classList.remove('bi-volume-mute');
        vol_icon.classList.add('bi-volume-off');
    }
    if (vol.value > 20) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down');
        vol_icon.classList.remove('bi-volume-mute');
        vol_icon.classList.remove('bi-volume-off');
    }
    if (vol.value > 95) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down');
        vol_icon.classList.remove('bi-volume-mute');
        vol_icon.classList.remove('bi-volume-off');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
})













// back and next buttons



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;

    if (index < 1) {
        index = Array.from(document.getElementsByClassName('song_item')).length;

    }
    music.src = `mp3/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-circle');


    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {
            songsName
        } = elss;
        title.innerHTML = songsName;
        // poster_master_play.src = poster
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('song_item'))[index - 1].style.background = "rgba(137, 137, 137, 0.2)";

    makeAllPlays();
    el.target.classList.add('bi-pause-circle-fill')
    el.target.classList.remove('bi-play-circle')
    wave.classList.add('active2');
});


next.addEventListener('click', () => {
    index++;

    if (index > Array.from(document.getElementsByClassName('song_item')).length) {
        index = 1;
    }

    music.src = `mp3/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-circle');


    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {
            songsName
        } = elss;
        title.innerHTML = songsName;
        // poster_master_play.src = poster
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('song_item'))[index - 1].style.background = "rgba(137, 137, 137, 0.2)";

    makeAllPlays();
    el.target.classList.add('bi-pause-circle-fill')
    el.target.classList.remove('bi-play-circle')
    wave.classList.add('active2');
})









































let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];



pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];



pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
})
pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
})