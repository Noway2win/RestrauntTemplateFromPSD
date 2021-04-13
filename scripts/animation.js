document.addEventListener('DOMContentLoaded', () => {
	const firstPage = document.querySelector('.firstpage'),
		secondPage = document.querySelector('.secondpage'),
		header = document.querySelector('header');
	let opened = false;
	window.addEventListener('scroll', () => {
		let scrollTop = window.scrollY,
			scrollHeight = window.getComputedStyle(document.querySelector('body')).height.slice(0, -2);
		menuAnimation(scrollTop, scrollHeight)();
		function menuAnimation(scroll, height) {
			let bodyPadding = window.getComputedStyle(document.querySelector('body')).paddingTop.slice(0, -2);
			let hideMenuPoint = Number(height - (document.querySelector('.fifthpage').offsetHeight + document.querySelector('.sixth-page').offsetHeight + document.querySelector('footer').offsetHeight));
			let firstPageHeight = firstPage.offsetHeight,
				headerHeight = +header.offsetHeight,
				headerHeightTotal = headerHeight + Number(bodyPadding);
			return function () {
				switch (true) {
					case (scroll <= headerHeightTotal):
						setDefaultMenu(header);
						break;
					case ((scroll < (firstPageHeight + headerHeightTotal)) && opened):
						hideMenu(header, secondPage);
						opened = false;
						break;
					case (scroll >= (firstPageHeight + headerHeightTotal) && scroll < hideMenuPoint):
						showMenu(header, secondPage, headerHeightTotal);
						opened = true;
						break;
					case (scroll >= hideMenuPoint):
						hideMenu(header, secondPage);
						opened = false;
						break;
				}
			}
		}
	})
});


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