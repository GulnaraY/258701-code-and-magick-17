'use strict';
var setupWindow = document.querySelector('.setup');
var dialogHandle = document.querySelector('.upload');

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

