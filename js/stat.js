'use strict';

/**
 * Получение и отрисовка статистики
 *
 */
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var SHADOW_GAP = 10;
  var GAP = 30;
  var HEADER_GAP = 20;
  var LINE_HEIGHT = 23;
  var FONT = '16px PT Mono';
  var COLUMN_WIDTH = 40;
  var MAX_COLUMN_HEIGHT = 150;
  var COLUMN_GAP = 50;
  var COLUMN_VERTICAL_GAP = 15;
  var headerHeight = HEADER_GAP + 2 * LINE_HEIGHT;
  var dataX = CLOUD_X + GAP;

  window.renderStatistics = function (ctx, names, times) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7) ';
    ctx.fillRect(CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, CLOUD_WIDTH, CLOUD_HEIGHT);

    ctx.fillStyle = '#fff';
    ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

    ctx.font = FONT;
    ctx.fillStyle = '#000';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура, Вы победили!', dataX, CLOUD_Y + HEADER_GAP);
    ctx.fillText('Список результатов:', dataX, CLOUD_Y + HEADER_GAP + LINE_HEIGHT);

    var maxTime = Math.max.apply(null, times);

    for (var i = 0; i < names.length; i++) {
      var columnHeight = times[i] * MAX_COLUMN_HEIGHT / maxTime;
      var columnVerticalIndent = MAX_COLUMN_HEIGHT - columnHeight;
      var columnX = COLUMN_GAP * i + COLUMN_WIDTH * i;

      ctx.fillStyle = '#000';
      ctx.fillText(Math.round(times[i]), dataX + columnX, headerHeight + LINE_HEIGHT + columnVerticalIndent - COLUMN_VERTICAL_GAP);
      ctx.fillText(names[i], dataX + columnX, headerHeight + LINE_HEIGHT + MAX_COLUMN_HEIGHT + COLUMN_VERTICAL_GAP);
      ctx.fillStyle = 'rgb(0, 0, ' + Math.random() * 255 + ')';
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      }
      ctx.fillRect(dataX + columnX, headerHeight + LINE_HEIGHT + columnVerticalIndent, COLUMN_WIDTH, columnHeight);
    }
  };
})();
