// Prototype code, it won't be organised

let tStart = false;

function testDraw() {
    if (!tStart) {
        tStart = true;
        testStart();
    }
    drawSquare(0, 0, canvas.width, canvas.height, "#000");

}

function testStart() {
    console.log("thing");
}