const car = {
    color: "blue",
    brand: "ford",
    speed: 0,

    accelerate: function () {
        this.speed += 5;
        console.log(this.speed);
    },

    horn: function () {
        console.log("honk!")
    }
};
console.log(car.color);
console.log(car.accelerate());
car.accelerate();
car.accelerate();
car.accelerate();
car.accelerate();
car.horn();
car.accelerate();