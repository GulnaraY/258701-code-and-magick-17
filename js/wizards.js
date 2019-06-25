'use strict';
/**
 * Отрисовка похожих персонажей
 * Зависит от модуля data.js, получает от нее случайного сгенерированного персонажа
 */

(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var SIMILAR_CHARACTERS_COUNT = 4;

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var showSimilarWizards = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < SIMILAR_CHARACTERS_COUNT; i++) {
      var character = window.createCharacter();
      fragment.appendChild(renderWizard(character));
    }
    similarListElement.appendChild(fragment);
  };

  showSimilarWizards();
})();
