document.addEventListener('DOMContentLoaded', () => {
	const animatedMenu = menuToogling();
	const sectionAppear = sectionAnimation();
	window.addEventListener('scroll', () => {
		let scrollTop = window.scrollY;
		let windowCenter = Math.round((window.innerHeight / 2) + scrollTop);
		animatedMenu(scrollTop);
		sectionAppear(windowCenter);
	})
})

function sectionAnimation() {
	const sections = document.querySelectorAll('.dissapeared_div');
	return function (windowCenter) {
		sections.forEach(section => {

			let sectionOffset = section.offsetTop;
			if (windowCenter >= sectionOffset) {
				showSection(section);
			}
		})
	}
}

function menuToogling() {
	const firstPageHeight = document.querySelector('.firstpage').offsetHeight,
		secondPage = document.querySelector('.secondpage'),
		header = document.querySelector('header');
	let totalHeaderHeight = Math.round(Number(header.offsetHeight) + Number(window.getComputedStyle(document.querySelector('body')).paddingTop.slice(0, -2)));
	let hideMenuPoint = Number(document.querySelector('.fifthpage').offsetTop);
	let opened = false;
	return function (scrollTop) {
		if (scrollTop <= totalHeaderHeight) {
			setDefaultMenu(header);
			setDefaultMargin(secondPage);
			return opened = false;
		} else if ((scrollTop < (firstPageHeight + totalHeaderHeight)) && opened) {
			hideMenu(header);
			setDefaultMargin(secondPage);
			return opened = false;
		} else if (scrollTop >= (firstPageHeight + totalHeaderHeight) && scrollTop < hideMenuPoint) {
			showMenu(header, secondPage, totalHeaderHeight);
			return opened = true;
		} else if (scrollTop >= hideMenuPoint) {
			hideMenu(header);
			setDefaultMargin(secondPage);
			return opened = false;
		}
	}
}

function showMenu(elem, secondElem, margin) {
	secondElem.style.marginTop = `${margin}px`;
	elem.classList.remove('header_fadeOut');
	elem.classList.add('header_fadeIn');
}
function hideMenu(elem) {
	elem.classList.remove('header_fadeIn');
	elem.classList.add('header_fadeOut');
}
function setDefaultMenu(elem) {
	elem.classList.remove('header_fadeIn', 'header_fadeOut');
}
function setDefaultMargin(elem) {
	elem.style.marginTop = `0px`;
}
function showSection(section) {
	section.classList.add('appeared_div');
}