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

    context.fillText(text, x, y)
}

function drawSquare(x, y, w, h, style) {
    if (style !== undefined) {
        context.fillStyle = style;
    }
    context.fillRect(x, y, w, h);
}