"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - preventBehavior.js;
*
* ============================
* ============================
* */

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
var initHamburger = function initHamburger() {

	var btn = document.querySelector("[hamburger-js]"),
	    hideScrollContainer = document.querySelectorAll("html, body"),
	    mobileContainer = document.querySelector("[mobile-block-js]");

	/**
   * @description
  */
	if (btn) {
		btn.addEventListener("click", function (ev) {
			var elem = ev.currentTarget;

			if (elem.classList.contains('is-active')) {
				elem.classList.remove("is-active");

				hideScrollContainer.forEach(function (val, idx) {
					val.classList.remove("is-hideScroll");
				});

				mobileContainer.classList.add("is-animate");
				mobileContainer.classList.remove("is-open");

				setTimeout(function () {
					mobileContainer.classList.remove("is-animate");
				}, 350);
			} else {
				elem.classList.add("is-active");
				mobileContainer.classList.add("is-open");

				hideScrollContainer.forEach(function (val, idx) {
					val.classList.add("is-hideScroll");
				});
			}
		});
	}
};

/**
 * @name initHeaderFixed
 *
 * @description Fixing the site header in the scrolling page.
 */
var initHeaderFixed = function initHeaderFixed() {

	var countScroll = $(window).scrollTop(),
	    headerElement = $('.header');

	if (countScroll > 10) {
		headerElement.addClass("is-fixed");
	} else {
		headerElement.removeClass("is-fixed");
	}
};

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/**
 * @name initStellar
 * @description Stellar.js is a jQuery plugin that provides parallax scrolling effects to any scrolling element.
 *
 * Parallax Elements
 * - data-stellar-ratio="1"
 *
 * Parallax Backgrounds
 * - data-stellar-background-ratio="1"
 */
var initStellar = function initStellar() {
	if ($("[parallax-js]").length) {
		$(function () {
			$.stellar({
				// Set scrolling to be in either one or both directions
				horizontalScrolling: false,
				verticalScrolling: true,

				// Set the global alignment offsets
				horizontalOffset: 0,
				verticalOffset: 0,

				// Refreshes parallax content on window load and resize
				responsive: false,

				// Select which property is used to calculate scroll.
				// Choose 'scroll', 'position', 'margin' or 'transform',
				// or write your own 'scrollProperty' plugin.
				scrollProperty: 'scroll',

				// Select which property is used to position elements.
				// Choose between 'position' or 'transform',
				// or write your own 'positionProperty' plugin.
				positionProperty: 'transform',

				// Enable or disable the two types of parallax
				parallaxBackgrounds: true,
				parallaxElements: true,

				// Hide parallax elements that move outside the viewport
				hideDistantElements: false,

				// Customise how elements are shown and hidden
				hideElement: function hideElement($elem) {
					$elem.hide();
				},
				showElement: function showElement($elem) {
					$elem.show();
				}
			});
		});
	}
};

/**
 * @description Window on load.
 */
window.addEventListener('load', function (ev) {
	initHeaderFixed();
});

/**
 * @description Window on resize.
 */
window.addEventListener('resize', function (ev) {});

/**
 * @description Window on scroll.
 */
window.addEventListener('scroll', function (ev) {
	initHeaderFixed();
});

/**
 * @description Document DOM ready.
 */
(function () {
	/*
 * CALLBACK :: start
 * ============================================= */
	var viewportAnimation = function viewportAnimation() {
		AOS.init({
			offset: 120,
			delay: 50,
			duration: 800,
			easing: 'ease-in-out-cubic',
			mirror: false,
			once: true
		});
	};

	var pathFloatingAnimation = function pathFloatingAnimation() {
		var xMin = -10,
		    xMax = 10,
		    yMin = -20,
		    yMax = 20,
		    positionsPerElement = 5,
		    secondsPerIteration = 5,
		    elements = $("[floating-node-js]");

		for (var i = 0; i < elements.length; i++) {
			randomFloat(elements[i], positionsPerElement, secondsPerIteration);
		}

		function random(min, max) {
			return min + Math.random() * (max - min);
		}

		function randomFloat(element, positions, duration) {
			var tl = new TimelineMax({
				repeat: -1,
				yoyo: true,
				delay: Math.random() * duration
			});

			for (var _i = 0; _i < positions; _i++) {
				tl.to(element, duration, {
					x: random(xMin, xMax),
					y: random(yMin, yMax),
					ease: Sine.easeInOut
				});
			}

			return tl;
		}
	};

	var faq = function faq() {
		$('.faq__collapse-head').on('click', function (ev) {
			var el = $(ev.currentTarget);

			if (el.hasClass('is-active')) {
				el.removeClass('is-active');
				el.siblings('.faq__collapse-body').slideUp(550);
			} else {
				$('.faq__collapse-head').removeClass('is-active');
				el.addClass('is-active');

				$('.faq__collapse-body').slideUp(550);
				el.siblings('.faq__collapse-body').slideDown(550);
			}
		});
	};
	/*
 * CALLBACK :: end
 * ============================================= */

	/**
  * @name initNative
  *
  * @description Init all method
  */
	var initNative = function initNative() {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		initStellar();
		initHamburger();
		// ==========================================

		// callback
		viewportAnimation();
		pathFloatingAnimation();
		faq();
		// ==========================================
	};
	initNative();
})();