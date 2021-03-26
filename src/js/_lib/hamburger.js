

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
const initHamburger = () => {

  const btn = document.querySelector("[hamburger-js]"),
    hideScrollContainer = document.querySelectorAll("html, body"),
    mobileContainer = document.querySelector("[mobile-block-js]");

	/**
   * @description
	 */
	if(btn) {
		btn.addEventListener("click", (ev) => {
			const elem = ev.currentTarget;
			
			if(elem.classList.contains('is-active')) {
				elem.classList.remove("is-active");
				
				hideScrollContainer.forEach((val, idx) => {
					val.classList.remove("is-hideScroll");
				});
				
				mobileContainer.classList.add("is-animate");
				mobileContainer.classList.remove("is-open");
				
				setTimeout(() => {
					mobileContainer.classList.remove("is-animate");
				}, 350);
				
			} else {
				elem.classList.add("is-active");
				mobileContainer.classList.add("is-open");
				
				hideScrollContainer.forEach((val, idx) => {
					val.classList.add("is-hideScroll");
				});
			}
			
		});
	}

};
