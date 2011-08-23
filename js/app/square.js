goog.provide('app.Square');

goog.require('goog.math.Vec2');
goog.require('goog.math.Coordinate');

/**
 @constructor
 @param {number=} opt_x 
 @param {number=} opt_y 
 */
app.Square = function(opt_x, opt_y) {
  this.current = new goog.math.Coordinate(opt_x || 0, opt_y || 0);
  this.target = new goog.math.Coordinate();
  this.velocity = new goog.math.Vec2(0, 0);
  this._rnd = Math.random() * 0.5;
};

app.Square.prototype.update = function(mouse) {
  var force, mag, push;
  force = goog.math.Vec2.difference(this.target, this.current);
  if (mouse) {
    push = goog.math.Vec2.difference(this.current, mouse);
    mag = push.magnitude();
    mag = 1000 / mag;
    push.normalize().scale(mag);
    force.add(push);
  }
  this.velocity.scale(1 - app.Square.DRAG);
  this.velocity.add(force.scale((1 + this._rnd) / app.Square.INERTIA));
  if (this.velocity.magnitude() > app.Square.TV) {
    this.velocity.normalize().scale(app.Square.TV);
  }
  this.current.x += this.velocity.x;
  this.current.y += this.velocity.y;
};

app.Square.INERTIA = 200;
app.Square.DRAG = 0.08;
app.Square.TV = 20;
