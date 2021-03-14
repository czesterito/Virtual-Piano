let clickable = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyW", "KeyE", "KeyT", "KeyY", "KeyU"];

document.addEventListener("keydown", function (event){
   if (clickable.includes(event.code)){
       let audio = new Audio(`sounds/${event.code}.mp3`);
       audio.play();
   } else {
        console.log("Wrong key");
   }
});

