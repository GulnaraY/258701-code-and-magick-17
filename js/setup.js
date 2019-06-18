'use strict';

var setupWindow = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var SIMILAR_CHARACTERS_COUNT = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var wizardSetupOpenButton = document.querySelector('.setup-open');
var wizardSetupCloseButton = document.querySelector('.setup-close');
var wizardSetupIcon = wizardSetupOpenButton.querySelector('.setup-open-icon');
var userNameInput = setupWindow.querySelector('.setup-user-name');
var setupSubmitButton = setupWindow.querySelector('.setup-submit');
var mainWizardCoatField = setupWindow.querySelector('.wizard-coat');
var mainWizardEyesField = setupWindow.querySelector('.wizard-eyes');
var mainWizardFireball = setupWindow.querySelector('.setup-fireball-wrap');
var wizardCoatInput = setupWindow.querySelector('[name = coat-color]');
var wizardEyesColorInput = setupWindow.querySelector('[name = eyes-color]');
var wizardFireballInput = setupWindow.querySelector('[name = fireball-color]');
var coatChangeCounter = 1;
var eyesChangeCounter = 1;
var fireballChangeCounter = 1;

var getRandomElement = function (elements) {
  return elements[Math.floor(Math.random() * elements.length)];
};

var createCharacter = function () {
  var character = {
    name: getRandomElement(NAMES) + ' ' + getRandomElement(SURNAMES),
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYES_COLORS)
  };
  return character;
};

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
    var character = createCharacter();
    fragment.appendChild(renderWizard(character));
  }
  similarListElement.appendChild(fragment);
};

showSimilarWizards();

var onDocumentEscPress = function (evt) {
  if ((evt.keyCode === ESC_KEYCODE) && (evt.target !== userNameInput)) {
    closeWizardSetupWindow();
  }
};

var onPopupCloseButtonKeyPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeWizardSetupWindow();
  }
};

var onPopupOpenButtonKeyPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    showSetupWindow();
  }
};

var onPopupSubmitButtonPress = function () {
  closeWizardSetupWindow();
};

var showSetupWindow = function () {
  setupWindow.classList.remove('hidden');
  setupWindow.querySelector('.setup-similar').classList.remove('hidden');

  wizardSetupCloseButton.addEventListener('keydown', onPopupCloseButtonKeyPress);
  document.addEventListener('keydown', onDocumentEscPress);
  setupSubmitButton.addEventListener('submit', onPopupSubmitButtonPress);
  setupSubmitButton.addEventListener('keydown', onPopupCloseButtonKeyPress);
};

var closeWizardSetupWindow = function () {
  setupWindow.classList.add('hidden');
  document.removeEventListener('click', onDocumentEscPress);
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

var changeCoatColor = function () {
  if (coatChangeCounter === COAT_COLORS.length) {
    coatChangeCounter = 0;
  }
  mainWizardCoatField.style.fill = COAT_COLORS[coatChangeCounter];
  wizardCoatInput.value = COAT_COLORS[coatChangeCounter];
  coatChangeCounter++;
};

var changeEyesColor = function () {
  if (eyesChangeCounter === EYES_COLORS.length) {
    eyesChangeCounter = 0;
  }
  mainWizardEyesField.style.fill = EYES_COLORS[eyesChangeCounter];
  wizardEyesColorInput.value = EYES_COLORS[eyesChangeCounter];
  eyesChangeCounter++;
};

var changeFireballColor = function () {
  if (fireballChangeCounter === FIREBALL_COLORS.length) {
    fireballChangeCounter = 0;
  }
  mainWizardFireball.style.backgroundColor = FIREBALL_COLORS[fireballChangeCounter];
  wizardFireballInput.value = FIREBALL_COLORS[fireballChangeCounter];
  fireballChangeCounter++;
};

mainWizardCoatField.addEventListener('click', function () {
  changeCoatColor();
});

mainWizardEyesField.addEventListener('click', function () {
  changeEyesColor();
});

mainWizardFireball.addEventListener('click', function () {
  changeFireballColor();
});
