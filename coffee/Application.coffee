goog.provide('Application')

goog.require 'QRCode'
goog.require 'QRErrorCorrectLevel'

###
@ constructor
@ param {!HTMLCanvasElement} canvas
###
class Application
  constructor: (@canvas, @input) ->
    this.typeNumber = 10
    this.size = this.typeNumber * 4 + 17;
    this.scale = 5
    $(input)
      .width(this.size * this.scale - 2)
      .val('Hello, world!')
      .bind 'keyup', goog.bind(this._create, this)

    this._create()

  _create: () ->
    qr = new QRCode(this.typeNumber, QRErrorCorrectLevel.Q)
    value = $(this.input).val()
    qr.addData(value)
    qr.make()

    mod = qr.modules

    dim = this.size * this.scale
    this.canvas = $(this.canvas).attr('width', dim).attr('height', dim)[0]
    context = this.canvas.getContext('2d')
    context.fillStyle = 'black'

    for row, y in mod
      for col, x in row
        if qr.isDark(y, x)
          context.fillRect(x * this.scale, y * this.scale, this.scale, this.scale)
    return
