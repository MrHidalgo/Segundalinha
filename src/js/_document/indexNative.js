/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* CALLBACK :: start
	* ============================================= */
	const viewportAnimation = () => {
		AOS.init({
			offset: 120,
			delay: 50,
			duration: 800,
			easing: 'ease-in-out-cubic',
			mirror: false,
			once: true
		});
	};
	
	
	const pathFloatingAnimation = () => {
		let xMin = -10,
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
	
	
	const faq = () => {
		$('.faq__collapse-head').on('click', (ev) => {
			const el = $(ev.currentTarget);
			
			if(el.hasClass('is-active')) {
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
	const initNative = () => {
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
