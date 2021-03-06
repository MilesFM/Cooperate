"use strict";
class textBox {
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
        this.activeScenes = activeScenes;

        if (scaleFactor == null) {
            this.scaleFactor = 0.25;
        } else {
            this.scaleFactor = scaleFactor;
        }

        this.disabled = false;
        this.typing = false;

        // When the mouse is clicked
        this.mouseDownEventNum = mouseDownArray.push((event) => {
            if (
                (event.clientX >= this.x 
                && event.clientX <= this.x+this.w) 
                && (event.clientY >= this.y
                && event.clientY <=  this.y+this.h) 
                && (event.button == 0) && !this.disabled
                && this.isActiveInScene()
            ) {  
                    this.typing = !this.typing;
            }
            return;
        });

        this.keyPressEvent = keyPressArray.push((event) => {
            console.log(event);
        });
    }
    draw() {
        /*
            If the button is disabled then don't draw the border
            If it isn't disabled but it's pressed, invert the border colour and the fill colour
        */
        if (!this.disabled) {
            drawSquare(this.x, this.y, this.w, this.h, this.borderColour);
            drawSquareNoFill(this.x, this.y, this.w, this.h, this.colour, "5");
        } else {
            drawSquare(this.x, this.y, this.w, this.h, this.borderColour);
        }

        // How big the text is going to be
        let textScale = ((this.w + this.h) / 2) * this.scaleFactor;
        
        drawText(this.text, this.x+(this.w/2), this.y+(this.h/2)+(this.h/10), this.textColour, `${textScale}px Arial`, "center");
    }
    drawCentre(offsetX, offsetY) {
        this.x = (canvas.width / 2) - this.w/2 + offsetX;
        this.y = (canvas.height / 2) - this.h/2 + offsetY;
        this.draw();
    }
    removeEvent() {
        mouseDownArray = mouseDownArray.splice(mouseDownEventNum-1, 1);
    }
    switchState() {
        if (this.disabled) {
            this.disabled = false;
        } else {
            this.disabled = true;
        }
    }
    // Checks if the button should be active in that current scene
    isActiveInScene() {
        if (this.activeScenes === "all") {
            return true;
        } else if (Array.isArray(this.activeScenes)) {
            // If there is an array, check if the current scene allows the button to be activated
            for (let element of this.activeScenes) {
                console.log(element);
                if (element === scene) {
                    return true;
                }
            }
            return false;
        } else {
            return false;
        }
    }
}

// This button is used where I just want to use a simple button
class genericTextBox extends textBox {
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