// Prototype code, it won't be organised or well written

let tStart = false;
let textTextBox;

function testDraw() {
    if (!tStart) {
        tStart = true;
        testStart();
    }
    textTextBox.draw();
    drawSquare(0, 0, canvas.width, canvas.height, "#000");

}

function testStart() {
    console.log("START THING");
    activeScenes = [-1];
    textTextBox = new genericTextBox(200, 200, 50, 50, "test");
    activeScenes = [1];
}