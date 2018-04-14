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
     */
    constructor(x, y, w, h, text, colour, textColour, borderColour) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.text = text;
        this.colour = colour;
        this.textColour = textColour;
        this.borderColour = borderColour;

        // For multiple click events
        this.clickEventNum = clickArray.push();
    }
    draw() {
        drawSquare(this.x, this.y, this.w, this.h, this.colour);
        drawSquareNoFill(this.x, this.y, this.w, this.h, this.borderColour, "5");
        drawText(this.text, this.x+(this.w/2), this.y+(this.h/2), this.textColour, `${((this.w + this.h) / 2) / 5}px Arial`, "center");
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
        super(x, y, w, h, text, "white", "black", "grey");
    }
}