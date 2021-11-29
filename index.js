for (var i = 0; i<=6; i++){
    
    //Detect click on button
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        var buttonActive = this.innerHTML;
        soundOn(buttonActive);
        buttonAnimation(buttonActive);
    })

    //Detect keyboard
    document.addEventListener("keydown", function (event) {
        var keyPressed = (event.key);
        soundOn(keyPressed);
        buttonAnimation(keyPressed);
    })
}

function soundOn(press) {
    switch (press) {
        case "w":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
    
        default:
            break;
    }
}

function buttonAnimation(currKey) {
    var activeButton = document.querySelector("." + currKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}