var keys = Array.prototype.slice.call(document.getElementsByClassName("key"));

for (let i = 0; i < keys.length; i++){
    keys[i].addEventListener("click", () => playMusic(keys[i]));
}

document.addEventListener('keyup', (e) => {
    if (e.key === "a"){
        playMusic(keys[0]);
    }
    else if (e.key === "s"){
        playMusic(keys[1]);
    }
    else if (e.key === "d"){
        playMusic(keys[2]);
    }
    else if (e.key === "f"){
        playMusic(keys[3]);
    }
    else if (e.key === "g"){
        playMusic(keys[4]);
    }
    else if (e.key === "h"){
        playMusic(keys[5]);
    }
    else if (e.key === "j"){
        playMusic(keys[6]);
    }
    else if (e.key === "k"){
        playMusic(keys[7]);
    }
    else if (e.key === "l"){
        playMusic(keys[8]);
    }
  });

function playMusic(key){
    key.classList.add("playing");
    let query = "[data-key='" + key.dataset.key + "']"
    let audios = document.querySelectorAll(query);
    let audio = audios[1]
    audio.addEventListener('ended', (event) => {
        key.classList.remove("playing");
      });
    audio.play();
}