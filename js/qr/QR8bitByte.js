//---------------------------------------------------------------------
// QRCode for ActionScript
// version 1.0.1
// Copyright (C) Kazuhiko Arase all rights reserved.
//---------------------------------------------------------------------

goog.provide('QR8bitByte');

/**
 * @param {string} data
 */
QR8bitByte = function(data) {
  this.mode = QRMode.MODE_8BIT_BYTE;
  this.data = data;
};

QR8bitByte.prototype = {

  getLength: function(buffer) {
    return this.data.length;
  },

  write: function(buffer) {
    for (var i = 0; i < this.data.length; i++) {
      // not JIS ...
      buffer.put(this.data.charCodeAt(i), 8);
    }
  }
};
