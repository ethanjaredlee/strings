var strings = [];
var setter;
var setterInit;

function setup() {
    createCanvas(600, 600);
    background(0);
    count = 0; //used to determine when to add a new line
}

function draw() {
    translate(width/2, height/2);
    diameter = 300;
    fill(200);
    mousePos = createVector(mouseX - width/2, mouseY - height/2);

    // count is used to slow down how lines r drawn
    count++;
    if (count % 50 == 0) {
        if (setterInit) {
            s = new String(diameter, setter);
            strings.push(s);
        }
    }

    for (i = 0; i<strings.length; i++) {
        strings[i].crawl();
        strings[i].display();
        if (strings[i].outOfRange()) {
            strings.splice(i, 1);
        }
    }

    if (keyIsPressed) {
        console.log('help');
        background(0);
        strings = [];
    }

    if (setterInit) {
        noStroke();
        ellipse(setter.x, setter.y, 7, 7);
    }
}

function mouseClicked() {
    if (Math.abs(mousePos.x) < diameter/2 && Math.abs(mousePos.y) < diameter/2 && !setterInit) {
        setter = createVector(mousePos.x, mousePos.y);
        setterInit = true;
    }
}

