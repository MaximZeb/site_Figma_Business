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
