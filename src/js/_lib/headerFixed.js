

/**
 * @name initHeaderFixed
 *
 * @description Fixing the site header in the scrolling page.
 */
const initHeaderFixed = () => {

  let countScroll = $(window).scrollTop(),
    headerElement = $('.header');

  if (countScroll > 10) {
    headerElement.addClass("is-fixed");
  } else {
    headerElement.removeClass("is-fixed");
  }

};
