/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

$(document).ready(function() {

  // $(window).keydown((e) => {
  //   switch (e.keyCode) {
  //     case 40:
  //       return processDownArrow();
  //     case 38:
  //       return processUpArrow();
  //     default:
  //
  //   }
  // })

})

function moveLayers(e) {
  switch (e.keyCode) {
    case 40:
      return processDownArrow();
    case 38:
      return processUpArrow();
  }
}

function processDownArrow() {
  let $top = $('.content').position().top;
  let $left = $('.content').position().left;

  console.log($('.content').position());

  let $height = $(window).height();
  let $width = $(window).width();

  if ($top <= -$height*0.95 && $left >= -$width*0.95*2) {
    $left -= $width*0.05
    $('.content').css('left', `${$left}px`)
  } else {
    $top -= $height*0.05
    $('.content').css('top', `${$top}px`)
  }
  console.log($('.content').position());

}

function processUpArrow() {
  let $top = $('.content').position().top;
  let $left = $('.content').position().left;

  let height = $(window).height();
  let width = $(window).width();

  if ($top <= -height && $left <= -width) {
    $left += width*0.05
    $('.content').css('left', `${$left}px`)
  } else {
    $top += height*0.05
    $('.content').css('top', `${$top}px`)
  }
}

function  triggerAnimations() {
  let $left = $('.content').position().left;

  if ($left <= -1070) {
    $('.three').addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass('animated fadeOut');
    })
  }
}

$(window).keydown(function(e) {
  moveLayers(e);
  triggerAnimations();
  // positionHarry();
})

$(window).resize(function() {
  // centerContent();
  // calculate windowHeight and windowWidth
  // calculate distance needed to travel
})


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map