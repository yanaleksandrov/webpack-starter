/**
 * Lock/unlock scroll
 */
const $body = document.querySelector('body');
let scrollPosition = 0;
export const scroll = {
	to(el) {
		if (typeof el === 'string') {
			let link = document.createElement('a');
			link.href = el;

			el = document.querySelector(link.hash);
		}

		if (typeof el === 'object' && el) {
			window.scrollTo(
				{
					top: el.getBoundingClientRect().top,
					behavior: 'smooth'
				}
			);
		}
	},
	lock() {
		let getScrollBarWidth = (function() {
			let el = window.document.createElement('textarea'),
				style = {
					'visibility': 'hidden', 'position': 'absolute', 'zIndex': '-2147483647',
					'top': '-1000px', 'left': '-1000px', 'width': '1000px', 'height': '1000px',
					'overflow': 'scroll', 'margin': '0', 'border': '0', 'padding': '0'
				},
				support = el.clientWidth !== undefined && el.offsetWidth !== undefined;

			for (let key in style) {
				if (style.hasOwnProperty(key)) {
					el.style[key] = style[key];
				}
			}

			return function() {
				let size = null;
				if (support && window.document.body) {
					window.document.body.appendChild(el);
					size = [el.offsetWidth - el.clientWidth, el.offsetHeight - el.clientHeight];
					window.document.body.removeChild(el);
				}
				return size;
			};
		})();

		scrollPosition = window.pageYOffset;

		$body.style.overflow    = 'hidden';
		$body.style.position    = 'static';
		$body.style.top         = `-${scrollPosition}px`;
		$body.style.width       = '100%';
		$body.style.maxHeight   = '100vh';
		$body.style.maxWidth    = '100vw';
		$body.style.marginRight = parseInt(getScrollBarWidth()) + 'px';
	},
	unlock() {
		$body.style.removeProperty('overflow');
		$body.style.removeProperty('position');
		$body.style.removeProperty('top');
		$body.style.removeProperty('width');
		$body.style.removeProperty('max-height');
		$body.style.removeProperty('max-width');
		$body.style.removeProperty('margin-right');
		window.scrollTo(0, scrollPosition);
	}
}
