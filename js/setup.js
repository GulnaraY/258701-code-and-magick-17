'use strict';

var setupWindow = document.querySelector('.setup');
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241,43,107)', 'rgb(146,100,161)', 'rgb(56,159,117)', 'rgb(215, 210,55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var SIMILAR_CHARACTERS_COUNT = 4;

var showSetupWindow = function () {
  if (setupWindow.classList.contains('hidden')) {
    setupWindow.classList.remove('hidden');
  }
};

var getRandomElement = function (elements) {
  return elements[Math.floor(Math.random() * (elements.length - 1))];
};

var createCharacter = function (characterName, characterSurname, characterCoatColor, characterEyesColor) {
  var character = {
    name: characterName + ' ' + characterSurname,
    coatColor: characterCoatColor,
    eyesColors: characterEyesColor
  };
  return character;
};

var createCharacters = function () {
  var characters = [];
  for (var i = 0; i < SIMILAR_CHARACTERS_COUNT; i++) {
    characters[i] = createCharacter(getRandomElement(NAMES), getRandomElement(SURNAMES), getRandomElement(COAT_COLORS), getRandomElement(EYES_COLORS));
  }
  return characters;
};

showSetupWindow();
createCharacters();

