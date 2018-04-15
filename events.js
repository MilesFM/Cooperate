"use strict";

let clickArray = [];

function onClick(event) {
    for (let funct of clickArray) {
        if (funct && {}.toString.call(funct) === '[object Function]') {
            funct(event);
        }
    }
}

function mouseMove(event) {
    cursorPos.x = event.clientX;
    cursorPos.y = event.clientY;
}