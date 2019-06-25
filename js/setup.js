'use strict';
/**
 * Настройка главного персонажа
 * зависит от модуля utils.js, вызывает функцию смены цвета у главного персонажа
 */

(function () {
  var setupWindow = document.querySelector('.setup');
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var mainWizardCoatField = setupWindow.querySelector('.wizard-coat');
  var mainWizardEyesField = setupWindow.querySelector('.wizard-eyes');
  var mainWizardFireball = setupWindow.querySelector('.setup-fireball-wrap');
  var wizardCoatInput = setupWindow.querySelector('[name = coat-color]');
  var wizardEyesColorInput = setupWindow.querySelector('[name = eyes-color]');
  var wizardFireballInput = setupWindow.querySelector('[name = fireball-color]');
  var coatChangeCounter = 1;
  var eyesChangeCounter = 1;
  var fireballChangeCounter = 1;

  mainWizardCoatField.addEventListener('click', function () {
    coatChangeCounter = window.util.changeColor(coatChangeCounter, COAT_COLORS, mainWizardCoatField, wizardCoatInput, true);
  });

  mainWizardEyesField.addEventListener('click', function () {
    eyesChangeCounter = window.util.changeColor(eyesChangeCounter, EYES_COLORS, mainWizardEyesField, wizardEyesColorInput, true);
  });

  mainWizardFireball.addEventListener('click', function () {
    fireballChangeCounter = window.util.changeColor(fireballChangeCounter, FIREBALL_COLORS, mainWizardFireball, wizardFireballInput, false);
  });
})();
