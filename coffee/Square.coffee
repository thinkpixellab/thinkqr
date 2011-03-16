goog.provide 'Square'

goog.require 'goog.math.Vec2'
goog.require 'goog.math.Coordinate'

class Square
  constructor: () ->
    this.current = new goog.math.Coordinate()
    this.target = new goog.math.Coordinate()
    this.velocity = new goog.math.Vec2(0, 0)

  update: () ->
    force = goog.math.Vec2.difference(this.target, this.current)

    this.velocity.scale(0.8)
    this.velocity.add(force)
    if(this.velocity.magnitude() > 5)
      this.velocity.normalize().scale(5)

    this.current.x += this.velocity.x
    this.current.y += this.velocity.y
    return
