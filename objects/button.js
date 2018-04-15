"use strict";

// For interactive buttons
/**
 * @class
 */
class button {
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} w 
     * @param {number} h 
     * @param {string} text 
     * @param {string} colour 
     * @param {string} textColour 
     * @param {string} borderColour
     * @param {number} scaleFactor
     */
    constructor(x, y, w, h, text, colour, textColour, borderColour, scaleFactor) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.text = text;
        this.colour = colour;
        this.textColour = textColour;
        this.borderColour = borderColour;

        if (scaleFactor == null) {
            this.scaleFactor = 0.25;
        } else {
            this.scaleFactor = scaleFactor;
        }

        this.disabled = false;
        this.pressed = false;

        // For multiple click events
        this.clickEventNum = clickArray.push();
    }
    draw() {
        /*
            If the button is disabled then don't draw the border
            If it isn't disabled but it's pressed, invert the border colour and the fill colour
        */
        if (!this.disabled) {
            if (!this.pressed) {
                drawSquare(this.x, this.y, this.w, this.h, this.colour);
                drawSquareNoFill(this.x, this.y, this.w, this.h, this.borderColour, "5");
            } else {
                drawSquare(this.x, this.y, this.w, this.h, this.borderColour);
                drawSquareNoFill(this.x, this.y, this.w, this.h, this.colour, "5");
            }
        } else {
            drawSquare(this.x, this.y, this.w, this.h, this.borderColour);
        }

        // How big the text is going to be
        let textScale = ((this.w + this.h) / 2) * this.scaleFactor;
        
        drawText(this.text, this.x+(this.w/2), this.y+(this.h/2)+(this.h/10), this.textColour, `${textScale}px Arial`, "center");
    }
    // Refine after object has been created
    clickOnButton() {
        return;
    }
    removeEvent() {
        //clickArray = clickArray.splice();
    }
}

// This button is used where I just want to use a simple button
class genericButton extends button {
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} w 
     * @param {number} h 
     * @param {string} text 
     */
    constructor(x, y, w, h, text) {
        super(x, y, w, h, text, "white", "black", "grey", 0.2);
    }
}