goog.provide 'Square'

goog.require 'goog.math.Vec2'
goog.require 'goog.math.Coordinate'

class Square
  constructor: (x = 0, y = 0) ->
    this.current = new goog.math.Coordinate(x, y)
    this.target = new goog.math.Coordinate()
    this.velocity = new goog.math.Vec2(0, 0)

  update: (mouse) ->
    force = goog.math.Vec2.difference(this.target, this.current)

    if mouse
      push = goog.math.Vec2.difference(this.current, mouse)
      mag = push.magnitude()
      mag = 1000 / mag
      push.normalize().scale(mag)
      force.add push

    this.velocity.scale(1 - Square.DRAG)
    this.velocity.add(force.scale(1 / Square.INERTIA))
    if(this.velocity.magnitude() > Square.TV)
      this.velocity.normalize().scale(Square.TV)

    this.current.x += this.velocity.x
    this.current.y += this.velocity.y
    return

Square.INERTIA = 200
Square.DRAG = 0.08
Square.TV = 20