goog.provide('Application')

goog.require 'QRCode'
goog.require 'QRErrorCorrectLevel'
goog.require 'Square'
goog.require 'Ticker'

###
@ constructor
@ param {!HTMLCanvasElement} canvas
###
class Application
  constructor: (@canvas, @input) ->
    this.typeNumber = 10
    this.size = this.typeNumber * 4 + 17;
    this.scale = 5
    this._initial = true

    this._dim = this.size * this.scale;

    $(input)
      .width(this._dim - 2)
      .val('Hello, world!')
      .bind 'keyup', goog.bind(this._create, this)

    this.canvas = $(this.canvas).attr('width', this._dim).attr('height', this._dim)[0]
    this.context = this.canvas.getContext('2d')
    this._squares = []

    this._create()
    Ticker.addListener(this)

  _create: () ->
    value = $(this.input).val()
    if(this.value != value)
      this.value = value
      qr = new QRCode(this.typeNumber, QRErrorCorrectLevel.Q)
      qr.addData(value)
      qr.make()
      this._updateSquareTargets(qr)
    return

  _updateSquareTargets: (qr) ->
    targets = []
    y = 0
    while y < this.size
      x = 0
      while x < this.size
        if qr.isDark(y, x)
          targets.push(new goog.math.Coordinate(x * this.scale, y * this.scale))
        x++
      y++

    while this._squares.length > targets.length
      i = goog.math.randomInt(this._squares.length)
      goog.array.removeAt(this._squares, i)
    while this._squares.length < targets.length
      if this._initial
        x = y = (this._dim - this.scale) / 2
      else
        x = goog.math.randomInt(this._dim - this.scale)
        y = goog.math.randomInt(this._dim - this.scale)
      s = new Square(x ,y)
      i = goog.math.randomInt(this._squares.length)
      goog.array.insertAt this._squares, s, i

    goog.array.rotate this._squares, this.size

    i = 0
    while i < targets.length
      this._squares[i].target.x = targets[i].x
      this._squares[i].target.y = targets[i].y
      i++

    this._initial = false

  tick: () ->
    this.context.fillStyle = 'white'
    this.context.fillRect(0, 0, this._dim, this._dim)

    this.context.fillStyle = 'black'

    i = 0
    while i < this._squares.length
      s = this._squares[i]
      this._updateSquare(s)
      i++
    return

  _updateSquare: (s) ->
    s.update()
    this.context.fillRect(s.current.x, s.current.y, this.scale, this.scale)


