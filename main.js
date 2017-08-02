function setup() {
    createCanvas(600, 600);
    background(160);
    frameRate(10);
}

function draw() {
    translate(width/2, height/2);
    diameter = 300;
    fill(200);
    mousePos = createVector(mouseX - width/2, mouseY - height/2);
    s = new String(diameter, mousePos);
    s.display();

    if (keyIsPressed) {
        background(160);
    }
}

