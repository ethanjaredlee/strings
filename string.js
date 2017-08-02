function String(d, p) {

    theta = random(0, TWO_PI);
    r = d/2;
    this.start = createVector(r * cos(theta), r * sin(theta));
    // TODO calculate the ending point for the line
    this.end = createVector(0,0);
    // TODO finale is the point on the circle that the line will eventually end at, end is the end of the line being drawn
    this.finale = createVector(0,0);
    this.direction = atan2(this.start.x - point.x, this.start.y - point.y);
    this.speed = 5;

    this.display = function() {
        line(this.start.x, this.start.y, this.end.x, this.end.y);
    }
}
