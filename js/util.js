'use strict';

/**
* Утилиты, хелперы
*
**/

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    /**
    * Действие после нажатия esc
    * @param {Object} evt -возвращает addEventListener
    * @param {Object} userNameInput - ссылка на активную дом-ноду
    * @param {function name(params)} action - функция, которая выполнится в результате
    **/

    isEscEvent: function (evt, userNameInput, action) {
      if ((evt.keyCode === ESC_KEYCODE) && (evt.target !== userNameInput)) {
        action();
      }
    },
    /**
    * Действие после нажатия Enter
    * @param {Object} evt - возвращает addEventListener
    * @param {Object} action - функция, которая выполнится в результате
    *
    */

    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    /**
    * Выбирает случайный элемент из массива
    * @param {array} elements
    * @return {} - содержимое случайного элемента массива
    */

    getRandomElement: function (elements) {
      return elements[Math.floor(Math.random() * elements.length)];
    },

    /**
    * Смена цветов главного персонажа
    * @param {number} changeCounter - счетчик измемения цвета
    * @param {array} colors - массив цветов
    * @param {object} changeField - поле, в котором меняется цвет
    * @param {object} changeInput - соответствующий полю input
    * @param {boolean} isFillChange - флаг, который показывает, что меняется атрибут fill, иначе background
    * @return {number} changeCounter увеличенный на 1
    */

    changeColor: function (changeCounter, colors, changeField, changeInput, isFillChange) {
      if (changeCounter === colors.length) {
        changeCounter = 0;
      }
      var color = colors[changeCounter];
      if (isFillChange) {
        changeField.style.fill = color;
      } else {
        changeField.style.backgroundColor = color;
      }
      changeInput.value = color;
      changeCounter++;
      return changeCounter;
    }
  };
})();
