goog.provide('Application')

goog.require 'QRCode'

###
@ constructor
@ param {!HTMLCanvasElement} canvas
###
class Application
  constructor: (@canvas) ->
    qr = new QRCode(10, 3)
    qr.addData('kevin')
    qr.make()
    
    scale = 5

    mod = qr.modules

    canvas = $(canvas).attr('width', mod.length * scale).attr('height', mod.length * scale)[0]
    context = canvas.getContext('2d')
    context.fillStyle = 'black'

    for row, y in mod
      for col, x in row
        if(col)
          context.fillRect(x * scale, y * scale, scale, scale)

