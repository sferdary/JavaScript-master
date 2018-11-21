var pictures = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var slideholder = document.getElementById("slideholder");
var counter = 0;

slideholder.style.backgroundImage = "url('img/monkey09.jpg')";

function getMonkey() {
    if (counter >= pictures.length) {
        counter = 1;

    } else {
        counter++;
    }
    console.log(counter);
    return counter;
}

slideholder.addEventListener("click", function () {
    slideholder.style.backgroundImage = "url('img/monkey0" + getMonkey() + ".jpg')";
});