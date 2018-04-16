"use strict";

let mouseDownArray = [];
// For multiple click events
function onMouseDown(event) {
    for (let funct of mouseDownArray) {
        if (funct && {}.toString.call(funct) === '[object Function]') {
            funct(event);
        }
    }
}

let mouseUpArray = [];
// For multiple mouse down events
function onMouseUp(event) {
    for (let funct of mouseUpArray) {
        if (funct && {}.toString.call(funct) === '[object Function]') {
            funct(event);
        }
    }
}

// For multiple events
function mouseMove(event) {
    cursorPos.x = event.clientX;
    cursorPos.y = event.clientY;
}