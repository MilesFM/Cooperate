"use strict";

class button {
    constructor(x, y, w, h, text, colour, textColour) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.text = text;
        this.colour = colour;

        // For multiple click events
        this.clickEventNum = clickArray.push();
    }
    draw() {
        drawSquare(this.x, this.y, this.w, this.h, this.colour);
        drawText(this.text, this.x, this.y, this.textColour, "medium Arial", "center");
    }
    // Refine after object has been created
    clickOnButton() {
        return;
    }
}