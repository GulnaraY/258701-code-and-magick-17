'use strict';

/**
* Модуль для работы с сервером. Отправка и загрузка данных
* Объект windows.backend доступен для других модулей
*/
(function () {
  var URL_LOAD = 'https://js.dump.academy/code-and-magick/data';
  var URL_SAVE = 'https://js.dump.academy/code-and-magick';
  window.backend = {

    /**
    * Загрузка данных с сервера
    * @param {function} onLoad - функция, котороая выполнится при успешной загрузке
    * @param {function} onError - функция, которая выполнится при ошибке
    */
    load: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.open('GET', URL_LOAD);

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.send();
    },

    /**
    * Отправка данных на сервер
    * @param {object} data - объект Formdata, который содержит данные формы для отправки на сервер
    * @param {function} onLoad - функция, котороая выполнится при успешной отправке
    * @param {function} onError - функция, которая выполнится при ошибке
    */
    save: function (data, onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
      xhr.open('POST', URL_SAVE);
      xhr.send(data);
    }
  };
})();
