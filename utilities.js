"use strict";

/**
 * 
 * @param {string} text 
 * @param {number} x 
 * @param {number} y 
 * @param {string} style 
 * @param {string} font 
 * @param {string} textAlign 
 */
function drawText(text, x, y, style, font, textAlign) {
    if (style !== undefined) {
        context.fillStyle = style;
    }
    if (font !== undefined) {
        context.font = font;
    }
    if (font !== undefined) {
        context.textAlign = textAlign;
    }

    context.fillText(text, x, y);
}

/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} w 
 * @param {number} h 
 * @param {string} style 
 */
function drawSquare(x, y, w, h, style) {
    if (style !== undefined) {
        context.fillStyle = style;
    }
    context.fillRect(x, y, w, h);
}

/**
 * 
 * @param {number} x 
 * @param {number} y 
 */
function Vector2(x, y) {
    this.x = x;
    this.y = y;
}

// For loading, playing and stopping audio.
class Audio {
    constructor(audio) {
        this.aContext = new AudioContext();

        let request = new XMLHttpRequest();
        request.open("GET", audio, true);
        request.responseType = "arraybuffer";
        request.onload = () => {
            this.aContext.decodeAudioData(request.response, (buffer) => {
                this.myAudioBuffer = buffer;
                console.log("Request successful");
            }, onError);
            request.send();
        };
    }
    play() {
        this.source = this.aContext.createBufferSource();
        this.soruce.buffer = this.myAudioBuffer;
        this.source.connect(this.aContext.destination);
        // Can only start once
        this.source.start(0);
    }
    stop() {
        // Can only stop once
        this.source.stop();
        delete this.source;
    }
}