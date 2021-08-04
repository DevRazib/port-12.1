/* Counter Up */
$('.counter-start').counterUp({
    delay: 10,
    time: 1000
});
let hamburger = document.querySelector('.hamburger');
		hamburger.addEventListener('click', function(){
			this.classList.toggle('active');
		});