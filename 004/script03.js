var img = [1, 2, 3];
var eyeSlider = document.getElementById("eyeSlider");
var noseSlider = document.getElementById("noseSlider");
var mouthSlider = document.getElementById("mouthSlider");
var counter = 0;

eyeSlider.style.backgroundImage = "url('img/eyes/eyes01.jpg')";
noseSlider.style.backgroundImage = "url('img/nose/nose01.jpg')";
mouthSlider.style.backgroundImage = "url('img/mouth/mouth01.jpg')";

eyeSlider.addEventListener("click", function () {
    eyeSlider.style.backgroundImage = "url('img/eyes/eyes0" + getImg() + ".jpg')";
});
noseSlider.addEventListener("click", function () {
    noseSlider.style.backgroundImage = "url('img/nose/nose0" + getImg() + ".jpg')";
});
mouthSlider.addEventListener("click", function () {
    mouthSlider.style.backgroundImage = "url('img/mouth/mouth0" + getImg() + ".jpg')";
});

function getImg() {
    if (counter >= img.length) {
        counter = 1;

    } else {
        counter++;
    }
    console.log(counter);
    return counter;
}