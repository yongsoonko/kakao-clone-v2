const headerWrapper = document.querySelector('.header-wrapper');
let ticking = false;

function doSomething(scroll_pos) {
  console.log(scroll_pos);
  if(scroll_pos == 0)
    headerWrapper.classList.remove('js-header-wrapper-shadow');
  else
    headerWrapper.classList.add('js-header-wrapper-shadow');
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
    ticking = true;
  }
});