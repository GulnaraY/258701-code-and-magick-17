'use strict';

/**
 * Отрисовка похожих персонажей
 * Зависит от модуля backend.js, получает из него похожих персонажей
 */
(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var SIMILAR_CHARACTERS_COUNT = 4;

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var onSuccess = function (wizards) {
    var fragment = document.createDocumentFragment();
    var selectedWizards = [];
    var i = 0;
    while (selectedWizards.length < SIMILAR_CHARACTERS_COUNT) {
      var wizard = window.util.getRandomElement(wizards);
      if (selectedWizards.includes(wizard)) {
        continue;
      }
      fragment.appendChild(renderWizard(wizard));
      selectedWizards[i] = wizard;
      i++;
    }
    similarListElement.appendChild(fragment);
  };

  window.backend.load(onSuccess, window.util.onError);
})();
