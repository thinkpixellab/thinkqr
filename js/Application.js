var Application;
goog.provide('Application');
goog.require('QRCode');
goog.require('QRErrorCorrectLevel');
goog.require('Square');
goog.require('Ticker');
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
    this._dim = this.size * this.scale;
    $(input).width(this._dim - 2).val('Hello, world!').bind('keyup', goog.bind(this._create, this));
    this.canvas = $(this.canvas).attr('width', this._dim).attr('height', this._dim)[0];
    this.context = this.canvas.getContext('2d');
    this._squares = [];
    this._create();
    Ticker.addListener(this);
  }
  Application.prototype._create = function() {
    var qr, value;
    qr = new QRCode(this.typeNumber, QRErrorCorrectLevel.Q);
    value = $(this.input).val();
    qr.addData(value);
    qr.make();
    this._updateSquareTargets(qr);
  };
  Application.prototype._updateSquareTargets = function(qr) {
    var count, square, x, y, _results;
    count = 0;
    y = 0;
    while (y < this.size) {
      x = 0;
      while (x < this.size) {
        if (qr.isDark(y, x)) {
          count++;
          square = null;
          if (this._squares.length < count) {
            square = new Square();
            this._squares.push(square);
          } else {
            square = this._squares[count - 1];
          }
          square.target.x = x * this.scale;
          square.target.y = y * this.scale;
        }
        x++;
      }
      y++;
    }
    _results = [];
    while (this._squares.length > count) {
      _results.push(this._squares.pop());
    }
    return _results;
  };
  Application.prototype.tick = function() {
    var i, s;
    this.context.fillStyle = 'white';
    this.context.fillRect(0, 0, this._dim, this._dim);
    this.context.fillStyle = 'black';
    i = 0;
    while (i < this._squares.length) {
      s = this._squares[i];
      this._updateSquare(s);
      i++;
    }
  };
  Application.prototype._updateSquare = function(s) {
    s.update();
    return this.context.fillRect(s.current.x, s.current.y, this.scale, this.scale);
  };
  return Application;
})();