'use strict';
/**
 * Генерация случайных данных для похожих персонажей
 * функция window.createCharacter доступна для других модулей
 */

(function () {
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  /**
   * создает случайного похожего персонажа
   * @return {object} character - ссгенерированный случайный персонаж
   */

  window.createCharacter = function () {
    var character = {
      name: window.util.getRandomElement(NAMES) + ' ' + window.util.getRandomElement(SURNAMES),
      coatColor: window.util.getRandomElement(COAT_COLORS),
      eyesColor: window.util.getRandomElement(EYES_COLORS)
    };
    return character;
  };
})();
