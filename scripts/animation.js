document.addEventListener('DOMContentLoaded', () => {
	const animatedMenu = menuToogling();
	const sectionAppear = elemAnimation('.dissapeared_div', 'appeared_div');
	const imageAppearLeft = elemAnimation('.dissapeared_img-left', 'appeared_img-left');
	const imageAppearRight = elemAnimation('.dissapeared_img-right', 'appeared_img-right');
	const imageAppearCenter = elemAnimation('.dissapeared_img-center', 'appeared_img-center');
	window.addEventListener('scroll', () => {
		let scrollTop = window.scrollY;
		let windowCenter = Math.round((window.innerHeight) + scrollTop);
		animatedMenu(scrollTop);
		sectionAppear(windowCenter);
		imageAppearLeft(windowCenter);
		imageAppearRight(windowCenter);
		imageAppearCenter(windowCenter);
	})
})

function elemAnimation(elemSelector, elemModifier) {
	const sections = document.querySelectorAll(elemSelector),
		modifierClassName = elemModifier;
	return function (windowCenter) {
		sections.forEach(section => {
			let sectionOffset = section.offsetTop;
			if (windowCenter >= sectionOffset) {
				showSection(section, modifierClassName);
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
function showSection(section, modifierClass) {
	section.classList.add(`${modifierClass}`);
}