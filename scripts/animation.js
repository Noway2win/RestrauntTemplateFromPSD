document.addEventListener('DOMContentLoaded', () => {
	const animatedMenu = menuToogling();
	window.addEventListener('scroll', () => {
		let scrollTop = window.scrollY;
		animatedMenu(scrollTop);
	})
})

function menuToogling() {
	const firstPageHeight = document.querySelector('.firstpage').offsetHeight,
		secondPage = document.querySelector('.secondpage'),
		header = document.querySelector('header');
	let totalHeaderHeight = Math.round(Number(header.offsetHeight) + Number(window.getComputedStyle(document.querySelector('body')).paddingTop.slice(0, -2)));
	let hideMenuPoint = Number(document.querySelector('.fifthpage').offsetTop);
	let opened = false;
	return function (scrollTop) {
		console.log(`now ${opened}`)
		if (scrollTop <= totalHeaderHeight) {
			setDefaultMenu(header);
			return opened = false;
		} else if ((scrollTop < (firstPageHeight + totalHeaderHeight)) && opened) {
			hideMenu(header, secondPage);
			return opened = false;
		} else if (scrollTop >= (firstPageHeight + totalHeaderHeight) && scrollTop < hideMenuPoint) {
			showMenu(header, secondPage, totalHeaderHeight);
			return opened = true;
		} else if (scrollTop >= hideMenuPoint) {
			hideMenu(header, secondPage);
			return opened = false;
		}
	}
}

function showMenu(elem, secondElem, margin) {
	secondElem.style.marginTop = `${margin}px`;
	elem.classList.remove('header_fadeOut');
	elem.classList.add('header_fadeIn');
}
function hideMenu(elem, secondElem) {
	secondElem.style.marginTop = `0px`;
	elem.classList.remove('header_fadeIn');
	elem.classList.add('header_fadeOut');
}
function setDefaultMenu(elem) {
	elem.classList.remove('header_fadeIn', 'header_fadeOut');
}