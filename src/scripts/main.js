/**
 * Main JS scripts
 *
 * @since 1.0
 */
document.addEventListener( 'click', e => {
  let el = e.target;

  if ( el.closest( '[data-js-event]' ) ) {
    e.preventDefault();
  }
});