var strings = [];
var setter;
var drawSetter;

function setup() {
    createCanvas(600, 600);
    background(160);
    count = 0; //used to determine when to add a new line
}

function draw() {
    translate(width/2, height/2);
    diameter = 300;
    fill(200);
    mousePos = createVector(mouseX - width/2, mouseY - height/2);

    count++;
    if (count % 50 == 0) {
        s = new String(diameter, createVector(0,0));
        strings.push(s);
    }

    for (i = 0; i<strings.length; i++) {
        strings[i].crawl();
        strings[i].display();
        if (strings[i].outOfRange()) {
            strings.splice(i, 1);
        }
    }

    if (keyIsPressed) {
        background(160);
        strings = [];
    }

    if (drawSetter) {
        noStroke();
        ellipse(setter.x, setter.y, 7, 7);
    }
}

function mouseClicked() {
    if (Math.abs(mousePos.x) < diameter/2 && Math.abs(mousePos.y) < diameter/2 && !drawSetter) {
        setter = createVector(mousePos.x, mousePos.y);
        drawSetter = true;
    }
}

