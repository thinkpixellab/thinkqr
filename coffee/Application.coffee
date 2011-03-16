goog.provide('Application')

goog.require 'QRCode'

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

    this._create $(input).val()

  _create: (data) ->
    qr = new QRCode(10, 3)
    value = $(this.input).val()
    qr.addData(value)
    qr.make()

    mod = qr.modules

    this.canvas = $(this.canvas).attr('width', mod.length * this.scale).attr('height', mod.length * this.scale)[0]
    context = this.canvas.getContext('2d')
    context.fillStyle = 'black'

    for row, y in mod
      for col, x in row
        if qr.isDark(y, x)
          context.fillRect(x * this.scale, y * this.scale, this.scale, this.scale)
    return
