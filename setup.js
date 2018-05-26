"use strict";

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

const frameRate = 1000/30;

let drawInterval;

let scene = 0;

let options; // Loaded from external JSON file
let checkOption;

// Sets up game
window.onload = () => {
    canvas.innerHTML = "Your browser doesn't support HTML Canvas";
    document.body.appendChild(canvas);
    AudioContext = AudioContext||webkitAudioContext;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    getJSON("./options.json").then((data) => {
        options = data;
    });

    checkOption = setInterval(optionsCheck, 10);

    drawInterval = setInterval(() => {
        if (options !== undefined){
            draw();
        }
    }, frameRate);
}

function optionsCheck() {
    if (options !== undefined) {
        console.log("test");
        clearInterval(checkOption);
        start();
    }
}

