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
		let xMin = -25,
			xMax = 25,
			yMin = -50,
			yMax = 50,
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
		// ==========================================
	};
	initNative();
})();
