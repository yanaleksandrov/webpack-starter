/**
 * Animate scroll to top button.
 *
 * @since 1.0
 */
const scrollTopBtn = document.querySelector('[data-scrolltop]')
if ( scrollTopBtn ) {
    ['scroll', 'resize'].forEach(event => {
        window.addEventListener(event, () => {
            let topPosition          = window.pageYOffset;
            let scrollPercentRounded = 164 - (164 / 100 * Math.round((topPosition / (document.body.clientHeight - window.innerHeight)) * 100));

            scrollTopBtn.style.opacity = topPosition > 300 ? 1 : 0;
            scrollTopBtn.innerHTML     = '<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 1a24 24 0 110 48 24 24 0 010-48" fill="none" style="stroke: rgba(0,0,0,0.55); stroke-width: 2px; stroke-dasharray: 150, 150; stroke-dashoffset: ' + scrollPercentRounded + ';"/><path stroke="#000" stroke-width="2" d="M19 28l6-6 6 6"/></svg>';
        });
    });
    scrollTopBtn.addEventListener('click', () => window.scroll({top: 0, behavior: 'smooth'}));
}