// Всплывающее окно  кнопка открытия и закрытия
function openNav () {
	document.getElementById('myNav').style.height = "100%";
}
function closeNav() {
	document.getElementById('myNav').style.height = "0%";
}
// кнопка верх 
window.onscroll = function() {
	doScroll ();
}
function doScroll() {
	let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
	let count = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let countpro = (windowScroll/count) * 100;
	let link = document.getElementById('scroll');
	
	if (countpro > 10) {
		link.style.display = "block";
	} else if (countpro < 10) {
		link.style.display = "none";
	}
}
//  плавное перемещение по якорю
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener('click', function(event){
		event.preventDefault();
		const blockID = anchor.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: 'start'
		});
	});
}
// попап окно 
function close_popup() {
	let Popup = document.getElementById('popup');
	Popup.style.display = 'none';
	let blur = document.getElementById('One');
	blur.classList.toggle('active');
}
function toggle() {
	let blur = document.getElementById('One');
	blur.classList.toggle('active');
	let Popup = document.getElementById('popup');
	Popup.style.display = 'flex';
}