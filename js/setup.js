'use strict';

/**
 * Настройка главного персонажа
 * зависит от модуля utils.js, вызывает функцию смены цвета у главного персонажа
 * зависит от модуля data.js, откуда получает массив с цветами мантии и глаз персонажа
 */
(function () {
  var setupWindow = document.querySelector('.setup');
  var COAT_COLORS = window.data.coatColors;
  var EYES_COLORS = window.data.eyesColors;
  var FIREBALL_COLORS = window.data.fireballColors;
  var mainWizardCoatField = setupWindow.querySelector('.wizard-coat');
  var mainWizardEyesField = setupWindow.querySelector('.wizard-eyes');
  var mainWizardFireball = setupWindow.querySelector('.setup-fireball-wrap');
  var wizardCoatInput = setupWindow.querySelector('[name = coat-color]');
  var wizardEyesColorInput = setupWindow.querySelector('[name = eyes-color]');
  var wizardFireballInput = setupWindow.querySelector('[name = fireball-color]');

  mainWizardCoatField.addEventListener('click', function () {
    window.util.changeColor('coat', COAT_COLORS, mainWizardCoatField, wizardCoatInput, true);
  });

  mainWizardEyesField.addEventListener('click', function () {
    window.util.changeColor('eyes', EYES_COLORS, mainWizardEyesField, wizardEyesColorInput, true);
  });

  mainWizardFireball.addEventListener('click', function () {
    window.util.changeColor('fireball', FIREBALL_COLORS, mainWizardFireball, wizardFireballInput, false);
  });
})();
