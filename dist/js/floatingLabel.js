'use strict';

setTimeout(() => {
  if (document.getElementById('email').value.length > 0) {
    document.getElementById('emailFormGroup').classList.add('active');
  }
}, 200);

var FloatLabel = (function () {
  // add active class
  var handleFocus = function handleFocus(e) {
    var target = e.target;
    target.parentNode.classList.add('active');
  }; // remove active class

  var handleBlur = function handleBlur(e) {
    var target = e.target;

    if (!target.value) {
      target.parentNode.classList.remove('active');
    }
  }; // register events

  var bindEvents = function bindEvents(element) {
    var floatField = element.querySelector('input');
    floatField.addEventListener('focus', handleFocus);
    floatField.addEventListener('blur', handleBlur);
  }; // get DOM elements

  var init = function init() {
    var floatContainers = document.querySelectorAll('.floating-label-container');
    floatContainers.forEach(function (element) {
      if (element.querySelector('input').value) {
        element.classList.add('active');
      }

      bindEvents(element);
    });
  };

  return {
    init: init,
  };
})();

FloatLabel.init();
