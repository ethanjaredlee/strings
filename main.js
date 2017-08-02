var strings = [];

function setup() {
    createCanvas(600, 600);
    background(160);
}

function draw() {
    translate(width/2, height/2);
    diameter = 300;
    fill(200);
    mousePos = createVector(mouseX - width/2, mouseY - height/2);

    s = new String(diameter, createVector(0,0));
    strings.push(s);

    for (i = 0; i<strings.length; i++) {
        strings[i].crawl();
        strings[i].display();
    }

    if (keyIsPressed) {
        background(160);
    }
}

