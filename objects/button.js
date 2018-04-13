"use strict";

class button {
    constructor(x, y, w, h, text, colour, textColour) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.text = text;
        this.colour = colour;
    }
    draw() {
        drawSquare(this.x, this.y, this.w, this.h, this.colour);
        drawText(this.text, this.x, this.y, this.textColour, "medium Arial", "center");
    }
}