'use strict';

/**
* Утилиты, хелперы
*
**/
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var COUNTERS = {
    coat: 1,
    eyes: 1,
    fireball: 1
  };

  window.util = {

    /**
    * Действие после нажатия esc
    * @param {object} evt -возвращает addEventListener
    * @param {object} userNameInput - ссылка на активную дом-ноду
    * @param {function} action - функция, которая выполнится в результате
    */
    isEscEvent: function (evt, userNameInput, action) {
      if ((evt.keyCode === ESC_KEYCODE) && (evt.target !== userNameInput)) {
        action();
      }
    },

    /**
    * Действие после нажатия Enter
    * @param {object} evt - возвращает addEventListener
    * @param {object} action - функция, которая выполнится в результате
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
    * @return {any} - содержимое случайного элемента массива
    */
    getRandomElement: function (elements) {
      return elements[Math.floor(Math.random() * elements.length)];
    },

    /**
    * Смена цветов главного персонажа
    * @param {string} type - что меняем
    * @param {array} colors - массив цветов
    * @param {object} changeField - поле, в котором меняется цвет
    * @param {object} changeInput - соответствующий полю input
    * @param {boolean} isFillChange - флаг, который показывает, что меняется атрибут fill, иначе background
    */
    changeColor: function (type, colors, changeField, changeInput, isFillChange) {
      if (COUNTERS[type] === colors.length) {
        COUNTERS[type] = 0;
      }
      var currentCounter = COUNTERS[type];
      var color = colors[currentCounter];
      if (isFillChange) {
        changeField.style.fill = color;
      } else {
        changeField.style.backgroundColor = color;
      }
      changeInput.value = color;
      COUNTERS[type] = currentCounter + 1;
    }
  };
})();
