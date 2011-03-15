var Application;
goog.provide('Application');
goog.require('QRCode');
/*
@ constructor
@ param {!HTMLCanvasElement} canvas
*/
Application = (function() {
  function Application(canvas) {
    var col, context, mod, qr, row, scale, x, y, _len, _len2;
    this.canvas = canvas;
    qr = new QRCode(10, 3);
    qr.addData('kevin');
    qr.make();
    scale = 5;
    mod = qr.modules;
    canvas = $(canvas).attr('width', mod.length * scale).attr('height', mod.length * scale)[0];
    context = canvas.getContext('2d');
    context.fillStyle = 'black';
    for (y = 0, _len = mod.length; y < _len; y++) {
      row = mod[y];
      for (x = 0, _len2 = row.length; x < _len2; x++) {
        col = row[x];
        if (col) {
          context.fillRect(x * scale, y * scale, scale, scale);
        }
      }
    }
  }
  return Application;
})();