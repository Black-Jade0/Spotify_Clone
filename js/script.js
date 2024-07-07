console.log("Jainam");

// async function display_cards() {
//     let a = await fetch(`http://127.0.0.1:3000/Spotify%20Clone/songs/`);
//     let responce = await a.text();

//     let div = document.createElement("div");
//     div.innerHTML = responce;
//     let as = div.getElementsByTagName("a");
//     console.log(Array.from(as));

//     let card_link = [];

//     for (let index = 1; index < as.length; index++) {
//         const element = as[index];
//         card_link.push(as[index].href.replaceAll("%20", " "));
//     }

//     card_link.forEach((element, index, array) => {
//         fetch(`${array[index]}info.json`)
//             .then((info_json) => {
//                 let decoded_json = info_json.json();
//                 return decoded_json;
//             })
//             .then((decoded_json) => {
//                 let div = `<div class="card" info="${element}">
//                                     <div class="card-img-div">
//                                         <div class="play-button">
//                                             <img
//                                                 class="play-button-button"
//                                                 src="img/play-circle-02-stroke-rounded.svg"
//                                                 alt=""
//                                             />
//                                         </div>
//                                         <img src="${element.replaceAll(
//                                             "%20",
//                                             " "
//                                         )}cover.jpg" />
//                                     </div>
//                                     <div class="card-desc">
//                                         <h3 class="card-desc-head">
//                                             ${decoded_json.title}
//                                         </h3>
//                                         <div class="card-desc-singer">
//                                             ${decoded_json.description}
//                                         </div>
//                                     </div>
//                                 </div>`;

//                 document
//                     .querySelector(".card-container")
//                     .insertAdjacentHTML("beforeend", div);
//             })
//             .then(() => {
//                 let card_container =
//                     document.querySelector(".card-container").lastElementChild;
//                 card_container.addEventListener("click", async (item) => {
//                     console.log("Fetching Songs");
//                     songs = await getsongs(`${card_container.getAttribute("info")}`);
//                 });
//             });
//     });
// }

// async function display_cards() {
//     console.log("displaying albums");
//     let a = await fetch(`http://127.0.0.1:3000/Spotify%20Clone/songs/`);
//     let response = await a.text();

//     let div = document.createElement("div");
//     div.innerHTML = response;
//     let anchors = div.getElementsByTagName("a");

//     let cardContainer = document.querySelector(".card-container");
//     let array = Array.from(anchors);
//     console.log(array);

//     for (let index = 0; index < array.length; index++) {
//         const e = array[index];
//         console.log(e);
//         if (e.href.includes("/songs/")) {
//             let folder = e.href.split("/")[5];
//             console.log(folder);
//             // Get the metadata of the folder
//             let a = await fetch(
//                 `http://127.0.0.1:3000/Spotify%20Clone/songs/${folder}/info.json`
//             );
//             let decoded_json = await a.json();
//             cardContainer.innerHTML =
//                 cardContainer.innerHTML +
//                 `<div class="card" info="${folder.replaceAll("%20"," ")}">
//                                     <div class="card-img-div"">
//                                         <div class="play-button">
//                                             <img
//                                                 class="play-button-button"
//                                                 src="img/play-circle-02-stroke-rounded.svg"
//                                                 alt=""
//                                             />
//                                         </div>
//                                         <img src="http://127.0.0.1:3000/Spotify%20Clone/songs/${folder}/cover.jpg" />
//                                     </div>
//                                     <div class="card-desc">
//                                         <h3 class="card-desc-head">
//                                             ${decoded_json.title}
//                                         </h3>
//                                         <div class="card-desc-singer">
//                                             ${decoded_json.description}
//                                         </div>
//                                     </div>
//                                 </div>`;
//         }
//     }

//     // Load the playlist whenever card is clicked
//     Array.from(document.getElementsByClassName("card")).forEach((e) => {
//         e.addEventListener("click", async (item) => {
//             console.log("Fetching Songs");
//             console.log(e);
//             console.log(e.getAttribute("info"))
//             songs = await getsongs(
//                 `http://127.0.0.1:3000/Spotify%20Clone/songs/${e
//                     .getAttribute("info")
//                     .replaceAll("%20", " ")}/`
//             );
//         });
//     });
// }

// async function display_cards() {
//     let a = await fetch(`http://127.0.0.1:3000/Spotify%20Clone/songs/`);
//     let response = await a.text();

//     let div = document.createElement("div");
//     div.innerHTML = response;
//     let as = div.getElementsByTagName("a");
//     console.log(Array.from(as));

//     let card_link = [];

//     for (let index = 1; index < as.length; index++) {
//         const element = as[index];
//         card_link.push(as[index].href.replaceAll("%20", " "));
//     }

//     // Create an array to store the promises
//     let promises = card_link.map(async (element, index, array) => {
//         let info_json = await fetch(`${array[index]}info.json`);
//         let decoded_json = await info_json.json();

//         let cardHTML = `
//             <div class="card">
//                 <div class="card-img-div" info="${element}">
//                     <div class="play-button">
//                         <img
//                             class="play-button-button"
//                             src="img/play-circle-02-stroke-rounded.svg"
//                             alt=""
//                         />
//                     </div>
//                     <img src="${element.replaceAll("%20", " ")}cover.jpg" />
//                 </div>
//                 <div class="card-desc">
//                     <h3 class="card-desc-head">
//                         ${decoded_json.title}
//                     </h3>
//                     <div class="card-desc-singer">
//                         ${decoded_json.description}
//                     </div>
//                 </div>
//             </div>`;
//         document.querySelector(".card-container").innerHTML += cardHTML;
//     });

//     // Wait for all the promises to resolve
//     await Promise.all(promises);

//     const newCards = document.querySelector(".card-container").getElementsByTagName("div");
//     console.log(newCards);

//     // Add event listeners after all cards are added to the DOM
//     Array.from(newCards).forEach((e) => {
//         e.addEventListener("click", async (item) => {
//             console.log("Fetching Songs");
//             songs = await getsongs(`${e.getAttribute("info")}`);
//         });
//     });
// }

async function display_cards() {
    let a = await fetch(`./songs`);
    let response = await a.text();
    console.log(response);

    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    console.log(as);
    let card_link = [];

    for (let index = 1; index < as.length; index++) {
        const element = as[index];
        if (!as[index].href.endsWith("htaccess")) {
            card_link.push(as[index].href);
        }
    }

    for (const element of card_link) {
        // console.log(element.replaceAll("%20", " "));
        let info_json = await fetch(
            `${element.replaceAll("%20", " ")}info.json`
        );
        let decoded_json = await info_json.json();

        // Create the card HTML string
        let cardHTML = `
            <div class="card" info="${element}">
                <div class="card-img-div">
                    <div class="play-button">
                        <img
                            class="play-button-button"
                            src="img/play-circle-02-stroke-rounded.svg"
                            alt=""
                        />
                    </div>
                    <img src="${element.replaceAll("%20", " ")}cover.jpg" />
                </div>
                <div class="card-desc">
                    <h3 class="card-desc-head">
                        ${decoded_json.title}
                    </h3>
                    <div class="card-desc-singer">
                        ${decoded_json.description}
                    </div>
                </div>
            </div>`;

        // Append the card HTML to the card container

        document
            .querySelector(".card-container")
            .insertAdjacentHTML("beforeend", cardHTML);

        // document.querySelector(".card-container").innerHTML =
        //     document.querySelector(".card-container").innerHTML + cardHTML;

        // remove and re-add the entire content,
        // which may inadvertently remove any existing event listeners attached
        // to the container’s children.
        // insertAdjacentHTML does not have this issue.

        // Get the newly created card
        const newCard =
            document.querySelector(".card-container").lastElementChild;

        // console.log(newCard);

        // Add the event listener to the new card

        newCard.addEventListener("click", async (item) => {
            console.log("fetching songs");
            let songs = await getsongs(`${newCard.getAttribute("info")}`);
            let element_left = document.querySelector(".left");
            element_left.style.transform = `translateX(0%)`;
        });
    }
}

let songs = [];

async function getsongs(folder) {
    let a = await fetch(`${folder}`);
    let responce = await a.text();

    let div = document.createElement("div");
    div.innerHTML = responce;
    let as = div.getElementsByTagName("a");

    // console.log(as);
    songs.length = 0;

    for (let index = 0; index < as.length; index++) {
        let raw_element = as[index];
        if (raw_element.href.endsWith(".mp3")) {
            songs.push(
                raw_element.href.split("songs/")[1].replaceAll("%20", " ")
            );
        }
    }

    console.log(songs);

    let song_list = document.querySelector(".song-list-ul");
    song_list.innerHTML = ``;
    for (let index = 0; index < songs.length; index++) {
        let raw_element = songs[index];
        try {
            let div = `<li class="song-list-ul-li" info="${raw_element}">
                    <img src="img/music.svg" alt="">
                    <div class="slist-desc">
                        <div class="slist-desc-name">${raw_element
                            .split("-")[1]
                            .split("(")[0]
                            .replace(".mp3", "")
                            .replace("_", " ")}
                        </div>
                        <div class="slist-desc-singer">${
                            raw_element
                                .split("-")[0]
                                .replaceAll("_", " ")
                                .split("/")[0]
                        }
                        </div>
                    </div>
                    <div class="slist-button">
                        <img src="img/play-circle-02-stroke-rounded.svg" alt="">
                    </div>
                </li>`;

            song_list.insertAdjacentHTML("beforeend", div);
        } catch {
            console.log(`error in ${raw_element}`);
        }

        // adding event listener to every song to play on a click

        let a = document.querySelector(".song-list-ul").lastElementChild;
        // console.log(a);
        a.addEventListener("click", (e) => {
            let href = a.getAttribute("info");
            // console.log(href);
            playsong(href);
        });
    }

    return songs;
}

let current_song = new Audio();
let playing = false;
let play_pause;

function playsong(href) {
    current_song.src = `songs/${href}`;
    // console.log(current_song.src);
    playing = true;
    current_song.play();
    play_pause.src = "img/pause.svg";
    let player_song = document.querySelector(".player-song");
    player_song.innerHTML = `<img src="img/music.svg"/>
                                <div class="player-song-desc ">
                                    <div class="player-song-name">
                                        ${
                                            href
                                                .split("-")[1]
                                                .replace(".mp3", "")
                                                .split("(")[0]
                                        }
                                    </div>
                                    <div class="player-song-singer">
                                        ${href.split("-")[0].split("/")[0]}
                                    </div>
                                </div>`;
}

async function main() {
    await display_cards();

    // adding event listener to the pause-play button

    play_pause = document.querySelector(".play-pause");
    play_pause.addEventListener("click", () => {
        if (current_song.src != "") {
            if (playing) {
                current_song.pause();
                play_pause.src = "img/play.svg";
                playing = false;
            } else {
                current_song.play();
                play_pause.src = "img/pause.svg";
                playing = true;
            }
        } else {
            console.log("u stupid?");
        }
    });

    // adding event listener to the current song - update timing and play-bar

    current_song.addEventListener("timeupdate", () => {
        let timer_current = document
            .querySelector(".time-current")
            .getElementsByTagName("span")[0];
        timer_current.innerHTML = `${Math.trunc(
            current_song.currentTime / 60
        )}:${Math.trunc(current_song.currentTime % 60)}`;

        let timer_duration = document
            .querySelector(".time-duration")
            .getElementsByTagName("span")[0];
        timer_duration.innerHTML = `${Math.trunc(
            current_song.duration / 60
        )}:${Math.trunc(current_song.duration % 60)}`;

        let total_length = document.querySelector(".play-bar-div").clientWidth;
        let unit_per_time = total_length / current_song.duration;
        let left_value = unit_per_time * current_song.currentTime;
        document
            .querySelector(".play-bar-ball")
            .getElementsByTagName("img")[0].style.left = `${left_value}px`;
        if (current_song.currentTime == current_song.duration) {
            let index = songs.indexOf(
                current_song.src.split("songs/")[1].replaceAll("%20", " ")
            );
            playsong(songs[index + 1]);
        }
        document.querySelector(".player").style.transform = `translateY(0%)`;
        document.querySelector(".spotify-playlist").style.height = `75%`;
        document.querySelector(".spotify-playlist").style.borderRadius = `10px`;
    });

    // adding event listener to play-bar - control the particular timing u want the music to play

    document
        .querySelector(".play-bar-div")
        .addEventListener("click", (element) => {
            let total_length =
                document.querySelector(".play-bar-div").clientWidth;
            let unit_per_time = total_length / current_song.duration;
            let new_currentTime = element.offsetX / unit_per_time;

            document
                .querySelector(".play-bar-ball")
                .getElementsByTagName(
                    "img"
                )[0].style.left = `${element.offsetX}px`;
            current_song.currentTime = new_currentTime;
        });

    // adding event listener to the hamburger

    document
        .querySelector(".hamburger")
        .addEventListener("click", (element) => {
            let element_left = document.querySelector(".left");
            element_left.style.transform = `translateX(0%)`;
        });

    // adding event listener to the cross

    document
        .querySelector(".logo-cross")
        .addEventListener("click", (element) => {
            let element_left = document.querySelector(".left");
            element_left.style.transform = `translateX(-230%)`;
        });

    // adding event listener to the previous

    previous.addEventListener("click", (element) => {
        let index = songs.indexOf(
            current_song.src.split("songs/")[1].replaceAll("%20", " ")
        );
        playsong(songs[(index - 1 + songs.length) % songs.length]);
    });

    // adding event listener to the next

    next.addEventListener("click", (element) => {
        let index = songs.indexOf(
            current_song.src.split("songs/")[1].replaceAll("%20", " ")
        );
        playsong(songs[(index + 1) % songs.length]);
    });

    // adding event listener to volume-image bar to control volume

    document
        .querySelector(".player-volume-img")
        .addEventListener("click", () => {
            if (!current_song.muted) {
                current_song.muted = true;
                document
                    .querySelector(".volume-ball")
                    .getElementsByTagName("img")[0].style.left = `-5px`;
                document.querySelector(
                    ".player-volume-img"
                ).src = `img/mute.svg`;
                volume_ball.style.setProperty(`--before-width`, `0px`);
            } else if (current_song.muted) {
                current_song.muted = false;
                current_song.volume = 1;
                document
                    .querySelector(".volume-ball")
                    .getElementsByTagName("img")[0].style.left = `${
                    document.querySelector(".volume-ball").clientWidth - 5
                }px`;
                document.querySelector(".player-volume-img").src =
                    "img/volume.svg";
                volume_ball.style.setProperty(`--before-width`, `100%`);
            }
        });

    // adding event listener to volume bar to control it

    document
        .querySelector(".volume-bar-div")
        .addEventListener("click", (element) => {
            console.log("just this shit");
            let total_length =
                document.querySelector(".volume-bar-div").clientWidth;
            let unit_per_volume = total_length;
            let new_currentVolume = element.offsetX / unit_per_volume;

            document
                .querySelector(".volume-ball")
                .getElementsByTagName(
                    "img"
                )[0].style.left = `${element.offsetX}px`;
            current_song.volume = new_currentVolume;
            volume_ball.style.setProperty(
                `--before-width`,
                `${element.offsetX}px`
            );
            if (current_song.volume > 0) {
                document.querySelector(
                    ".player-volume-img"
                ).src = `img/volume.svg`;
            } else if (current_song.volume == 0) {
                document.querySelector(".player-volume-img").src =
                    "img/mute.svg";
            }
        });
}

main();
