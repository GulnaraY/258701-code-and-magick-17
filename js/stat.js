'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_GAP = 10;
var GAP = 30;
var FONT_GAP = 20;
var FONT = '16px PT Mono';
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 150;
var COLUMN_GAP = 50;

var getMaxElement = function (elements) {
  var maxElement = elements[0];
  for (var i = 0; i < elements.length; i++) {
    if (elements[i] > maxElement) {
      maxElement = elements[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7) ';
  ctx.fillRect(CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#fff';
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.font = FONT;
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура, Вы победили!', CLOUD_X + GAP, CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + 2 * FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), GAP + CLOUD_X + COLUMN_GAP * i + COLUMN_WIDTH * i, 4 * FONT_GAP);
    ctx.fillText(names[i], GAP + CLOUD_X + COLUMN_GAP * i + COLUMN_WIDTH * i, 5 * FONT_GAP + COLUMN_HEIGHT + 10);
    ctx.fillStyle = 'rgb(0, 0, ' + Math.random() * 255 + ')';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(GAP + CLOUD_X + COLUMN_GAP * i + COLUMN_WIDTH * i, 5 * FONT_GAP + COLUMN_HEIGHT - (times[i] * COLUMN_HEIGHT / maxTime), COLUMN_WIDTH, times[i] * COLUMN_HEIGHT / maxTime);
  }
};
