"use strict";

// For multiple click events
let mouseDownArray = [];
function onMouseDown(event) {
    preventDefault(event);
    for (let funct of mouseDownArray) {
        if (funct && {}.toString.call(funct) === '[object Function]') {
            funct(event);
        }
    }
}

// For multiple mouse down events
let mouseUpArray = [];
function onMouseUp(event) {
    preventDefault(event)
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

/*
// For multiple key events
let keyDownArray = [];
function keyDown(event) {
    for (let funct of keyDownArray) {
        if (funct && {}.toString.call(funct) === '[object Function]') {
            funct(event);
        }
    }
}
*/

// For multiple key events
let keyPressArray = [];
function keyPress(event) {
    for (let funct of keyPressArray) {
        if (funct && {}.toString.call(funct) === '[object Function]') {
            funct(event);
        }
    }
}

// Prevent action from automatically firing what it's meant to fire
function preventDefault(event) {
    if (event.cancelable) { // Make sure the event can be cancelled
        event.preventDefault();
    }
}
