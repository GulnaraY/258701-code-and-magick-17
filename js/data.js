'use strict';

/**
 * Генерация случайных данных для похожих персонажей
 * объект window.data доступен для других модулей
 *
 */
(function () {
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  window.data = {

    /**
     * массив с цветами мантий персонажа
     */
    coatColors: COAT_COLORS,

    /**
     * массив с цветами глаз персонажа
     */
    eyesColors: EYES_COLORS,

    /**
     * массив с цветами файербола
     */
    fireballColors: FIREBALL_COLORS,

    /**
   * создает случайного похожего персонажа
   * @return {object} character - ссгенерированный случайный персонаж
   */
    createCharacter: function () {
      var character = {
        name: window.util.getRandomElement(NAMES) + ' ' + window.util.getRandomElement(SURNAMES),
        coatColor: window.util.getRandomElement(COAT_COLORS),
        eyesColor: window.util.getRandomElement(EYES_COLORS)
      };
      return character;
    }
  };
})();
