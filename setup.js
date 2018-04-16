"use strict";

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

const frameRate = 1000/30;
const tickRate = 10;

let drawInterval;
let updateInterval;

let scene = 0;

// Sets up game
window.onload = () => {
    canvas.innerHTML = "Your browser doesn't support HTML Canvas";
    document.body.appendChild(canvas);
    AudioContext = AudioContext||webkitAudioContext;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    start();

    /*updateInterval = setInterval(() => {
        update();
    }, tickRate);*/

    drawInterval = setInterval(() => {
        draw();
    }, frameRate);
}