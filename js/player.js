(() => {
  const audioPlayer = document.querySelector(".backgroundplayer");
  const audio = new Audio("./Wonders.mp3");

  console.dir(audio);

  audio.addEventListener("loadeddata",() => {
      audioPlayer.querySelector(".length").textContent = getTimeCodeFromNum(audio.duration); //put audio length into div
      audio.volume = 0.10;
    },
    false
  );

  //click on timeline to skip around
  const timeline = audioPlayer.querySelector(".timeline");
  timeline.addEventListener("click", e => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
  }, false);

  //click volume slider to change volume
  const volumeSlider = audioPlayer.querySelector(".volume-slider");
  volumeSlider.addEventListener('click', e => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;
    audioPlayer.querySelector(".volume-percentage").style.width = newVolume * 100 + '%';
  }, false)

  //check audio percentage and update time accordingly
  setInterval(() => {
    const progressBar = audioPlayer.querySelector(".progress");
    const playBtn = audioPlayer.querySelector(".playpause");
    progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
    audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(audio.currentTime);
    
    //also resets play button when song's over
    if (audio.currentTime == audio.duration) {
      $(".pause-track").css("display", "none");
      $(".play-track").css("display", "block");
    }
  }, 500);

  //toggle between playing and pausing on button click
  const playBtn = audioPlayer.querySelector(".playpause");
  playBtn.addEventListener("click",() => {
      if (audio.paused) {
        playBtn.classList.remove("play");
        playBtn.classList.add("pause");
        audio.play();
      } else {
        playBtn.classList.remove("pause");
        playBtn.classList.add("play");
        audio.pause();
      }
    },
    false
  );

  audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
    const volumeEl = audioPlayer.querySelector(".volume");
    audio.muted = !audio.muted;
    if (audio.muted) {
      volumeEl.classList.remove("icono-volumeMedium");
      volumeEl.classList.add("icono-volumeMute");
    } else {
      volumeEl.classList.add("icono-volumeMedium");
      volumeEl.classList.remove("icono-volumeMute");
    }
  });

  //turn 128 seconds into 2:08
  function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  }

})();