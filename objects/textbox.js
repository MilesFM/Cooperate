"use strict";


class textBox {
    constructor(x, y, w, h, predefinedtText, colour, textColour, borderColour, scaleFactor) {
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

        // When the mouse is clicked
        this.mouseDownEventNum = mouseDownArray.push((event) => {
            if ((event.clientX >= this.x && event.clientX <= this.x+this.w) && (event.clientY >= this.y && event.clientY <=  this.y+this.h) && (event.button == 0)  && !this.disabled) {
                this.pressed = true;
                this.clickOnButton();
            }
            return;
        });

        // When the mouse is released
        this.mouseUpEventNum = mouseUpArray.push((event) => {
            if (event.button == 0 || this.disabled) {
                this.pressed = false;
            }
            return;
        });
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
        mouseDownArray = mouseDownArray.splice(mouseDownEventNum-1, 1);
    }
}