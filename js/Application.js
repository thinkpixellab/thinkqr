var Application;
goog.provide('Application');
goog.require('QRCode');
/*
@ constructor
@ param {!HTMLCanvasElement} canvas
*/
Application = (function() {
  function Application(canvas, input) {
    this.canvas = canvas;
    this.input = input;
    this.typeNumber = 10;
    this.size = this.typeNumber * 4 + 17;
    this.scale = 5;
    $(input).width(this.size * this.scale - 2).val('Hello, world!');
    this._create($(input).val());
  }
  Application.prototype._create = function(data) {
    var col, context, mod, qr, row, value, x, y, _len, _len2;
    qr = new QRCode(10, 3);
    value = $(this.input).val();
    qr.addData(value);
    qr.make();
    mod = qr.modules;
    this.canvas = $(this.canvas).attr('width', mod.length * this.scale).attr('height', mod.length * this.scale)[0];
    context = this.canvas.getContext('2d');
    context.fillStyle = 'black';
    for (y = 0, _len = mod.length; y < _len; y++) {
      row = mod[y];
      for (x = 0, _len2 = row.length; x < _len2; x++) {
        col = row[x];
        if (qr.isDark(y, x)) {
          context.fillRect(x * this.scale, y * this.scale, this.scale, this.scale);
        }
      }
    }
  };
  return Application;
})();