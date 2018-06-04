"use strict";

let mouseDownArray = [];
// For multiple click events
function onMouseDown(event) {
    preventDefault(event);
    for (let funct of mouseDownArray) {
        if (funct && {}.toString.call(funct) === '[object Function]') {
            funct(event);
        }
    }
}

let mouseUpArray = [];
// For multiple mouse down events
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

// Prevent action from automatically firing what it's meant to fire
function preventDefault(event) {
    if (event.cancelable) { // Make sure the event can be cancelled
        event.preventDefault();
    }
}
