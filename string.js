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

    this.crawl = function() {
        console.log('hello');
        this.end.add(this.velocity);
    }

    this.display = function() {
        line(this.start.x, this.start.y, this.end.x, this.end.y);
    }
}
