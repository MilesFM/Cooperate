const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

const frameRate = 1000/30;
const tickRate = 10;

let drawInterval;
let updateInterval;

window.onload = () => {
    document.body.appendChild(canvas);

    start();

    updateInterval = setInterval(() => {
        update();
    }, tickRate);

    drawInterval = setInterval(() => {
        draw();
    }, frameRate);
}