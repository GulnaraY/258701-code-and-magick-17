'use strict';

/**
 * Работа с диалоговым окном: открытие, закрытие, перетаскивание
 * Зависит от модуля utils.js, получает функции обработки нажатия esc и enter
 **/
(function () {
  var setupWindow = document.querySelector('.setup');
  var dialogHandle = document.querySelector('.upload');
  var wizardSetupCloseButton = document.querySelector('.setup-close');
  var userNameInput = setupWindow.querySelector('.setup-user-name');
  var setupSubmitButton = setupWindow.querySelector('.setup-submit');
  var wizardSetupOpenButton = document.querySelector('.setup-open');
  var wizardSetupIcon = wizardSetupOpenButton.querySelector('.setup-open-icon');
  var setupTop = '80px';
  var setupLeft = '50%';

  var onDocumentEscPress = function (evt) {
    window.util.isEscEvent(evt, userNameInput, closeWizardSetupWindow);
  };

  var onPopupCloseButtonKeyPress = function (evt) {
    window.util.isEnterEvent(evt, closeWizardSetupWindow);
  };

  var onPopupOpenButtonKeyPress = function (evt) {
    window.util.isEnterEvent(evt, showSetupWindow);
  };

  var onPopupSubmitButtonPress = function () {
    closeWizardSetupWindow();
  };

  var showSetupWindow = function () {
    setupWindow.classList.remove('hidden');
    setupWindow.style.left = setupLeft;
    setupWindow.style.top = setupTop;
    setupWindow.querySelector('.setup-similar').classList.remove('hidden');

    wizardSetupCloseButton.addEventListener('keydown', onPopupCloseButtonKeyPress);
    document.addEventListener('keydown', onDocumentEscPress);
    setupSubmitButton.addEventListener('submit', onPopupSubmitButtonPress);
    setupSubmitButton.addEventListener('keydown', onPopupCloseButtonKeyPress);
  };

  var closeWizardSetupWindow = function () {
    setupWindow.classList.add('hidden');
    document.removeEventListener('keydown', onDocumentEscPress);
    wizardSetupCloseButton.removeEventListener('keydown', onPopupCloseButtonKeyPress);
    setupSubmitButton.removeEventListener('submit', onPopupSubmitButtonPress);
    setupSubmitButton.removeEventListener('keydown', onPopupCloseButtonKeyPress);
  };

  wizardSetupOpenButton.addEventListener('click', function () {
    showSetupWindow();
  });

  wizardSetupCloseButton.addEventListener('click', function () {
    closeWizardSetupWindow();
  });

  wizardSetupIcon.addEventListener('keydown', onPopupOpenButtonKeyPress);
  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (evtMove) {
      dragged = true;
      var diff = {
        x: startCoords.x - evtMove.clientX,
        y: startCoords.y - evtMove.clientY
      };

      startCoords = {
        x: evtMove.clientX,
        y: evtMove.clientY
      };

      setupWindow.style.top = (setupWindow.offsetTop - diff.y) + 'px';
      setupWindow.style.left = (setupWindow.offsetLeft - diff.x) + 'px';
    };

    var onMouseUp = function (evtUp) {
      evtUp.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evtPrevent) {
          evtPrevent.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
