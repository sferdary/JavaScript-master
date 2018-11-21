//GIVES RANDOM NUMBERS WITHOUT DUPLICATES:
const pictures = document.getElementsByTagName("img");

let random = 0;
let randomNumbers = [];

while (randomNumbers.length < 9) {
    random = Math.floor(Math.random() * 9) + 1;
    if (randomNumbers.lastIndexOf(random) == -1) {
        randomNumbers.push(random);
        console.log(randomNumbers)
    }
}
random = 0;
for (const picture in pictures) {
    pictures[picture].src = "img/monkey0"+randomNumbers[random]+".jpg";
    random++

}
//GIVES RANDOM NUMBERS WITH DUPLICATES:

// for (let j = 0; j < pictures.length; j++) {
//     random = Math.floor(Math.random() * 9) + 1;
//     pictures[j].src = "img/monkey0" + random + ".jpg"
// }


//GIVES NUMBERS WITH DUPLICATES:
// for (let i = 1; i <= 9; i++) {
//     document.getElementById("monkey0"+ i).src = "img/monkey0"+i+".jpg";
// }