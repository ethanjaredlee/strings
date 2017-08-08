function String(d, p) {

    theta = random(0, TWO_PI);
    r = d/2;
    this.start = createVector(r * cos(theta), r * sin(theta));
    this.end = this.start.copy()
    var direction = p5.Vector.sub(p, this.start).normalize();
    this.velocity = p5.Vector.mult(direction, 1);
    this.c = color(random(0,255), random(0, 255), random(0, 255));
    this.life = 0;

    this.crawl = function() {
        if (!this.circumference()) {
            this.end.add(this.velocity);
            this.life++;
        }
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
        if (Math.pow(this.end.x, 2) + Math.pow(this.end.y, 2) > Math.pow(r, 2) && this.life > 200) {
            return true;
        }

        return false;
    }
}
