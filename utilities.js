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

function drawSquareNoFill(x, y, w, h, style, lineWidth) {
    if (style !== undefined) {
        context.strokeStyle = style;
    }
    if (lineWidth !== undefined) {
        context.lineWidth = lineWidth;
    }
    context.beginPath();
    context.rect(x, y, w, h);
    context.stroke();
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

function drawImage(src, x, y, w, h) {
    let img = new Image();
    img.src = src;
    context.drawImage(img, x, y, w, h);
}

let aiScriptElement;
// Gets the script and uses it
function getAIScript(scriptLocation) {
    let req = new XMLHttpRequest();
    req.responseType = "text";
    req.open("GET", scriptLocation, true);
    req.onreadystatechange = () => {
        try {
            if (aiScriptElement != undefined) {
                aiScriptElement.parentNode.removeChild(aiScriptElement);
            }
            aiScriptElement = document.createElement("script");
            aiScriptElement.innerHTML = req.responseText;

            document.body.appendChild(aiScriptElement);
        } catch (err) {
            console.error(err);
        }
    };
    req.send(null);
}

/**
 * Gets the file and writes the contents to the passed object to .text
 * @param {string}
 * @param {object}
 */
function getFile(fileLocation, fileContents) {
    let req = new XMLHttpRequest();
    req.responseType = "text";
    req.open("GET", fileLocation, true);
    req.onreadystatechange = () => {
        try {
            fileContents.text = req.responseText;
        } catch (err) {
            console.error(err);
        }
    };
    req.send(null);
}

function wrapText(drawTextFuncInput, maxWidth, lineHeight) {
    var words = drawTextFuncInput.text.split(' ');
    var line = '';

    for(var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            drawText(line, drawTextFuncInput.x, drawTextFuncInput.y, drawTextFuncInput.style, drawTextFuncInput.font, drawTextFuncInput.textAlign);
            line = words[n] + ' ';
            y += lineHeight;
        }
        else {
            line = testLine;
        }
    }
    drawText(line, drawTextFuncInput.x, drawTextFuncInput.y, drawTextFuncInput.style, drawTextFuncInput.font, drawTextFuncInput.textAlign);
}