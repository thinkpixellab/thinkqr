var Square;
goog.provide('Square');
goog.require('goog.math.Vec2');
goog.require('goog.math.Coordinate');
Square = (function() {
  function Square(x, y) {
    if (x == null) {
      x = 0;
    }
    if (y == null) {
      y = 0;
    }
    this.current = new goog.math.Coordinate(x, y);
    this.target = new goog.math.Coordinate();
    this.velocity = new goog.math.Vec2(0, 0);
  }
  Square.prototype.update = function() {
    var force;
    force = goog.math.Vec2.difference(this.target, this.current);
    this.velocity.scale(1 - Square.DRAG);
    this.velocity.add(force.scale(0.01));
    if (this.velocity.magnitude() > Square.TV) {
      this.velocity.normalize().scale(Square.TV);
    }
    this.current.x += this.velocity.x;
    this.current.y += this.velocity.y;
  };
  return Square;
})();
Square.DRAG = 0.1;
Square.TV = 20;