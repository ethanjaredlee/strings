function String(d, p) {

    theta = random(0, TWO_PI);
    r = d/2;
    this.start = createVector(r * cos(theta), r * sin(theta));
    // TODO calculate the ending point for the line
    this.end = this.start.copy()
    // TODO finale is the point on the circle that the line will eventually end at, end is the end of the line being drawn
    this.finale = createVector(0,0);
    var direction = p5.Vector.sub(this.start, p).normalize();
    this.velocity = p5.Vector.mult(direction, 1);
    this.c = color(random(0,255), random(0, 255), random(0, 255));

    this.crawl = function() {
        this.end.add(this.velocity);
    }

    this.display = function() {
        stroke(this.c);
        strokeWeight(5);
        line(this.start.x, this.start.y, this.end.x, this.end.y);
    }

    this.outOfRange = function() {
        if (Math.abs(this.end.x) > width/2 ||
            Math.abs(this.end.y) > height) {
            return true;
        }
    }

    this.circumference = function() {
        if ((this.end.x)^2 + (this.end.y)^2 > 1) {
            return true;
        }
    }
}
