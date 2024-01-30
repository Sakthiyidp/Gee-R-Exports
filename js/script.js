const slides = document.querySelectorAll('.slide');
const controls = document.querySelectorAll('.control');
let activeSlide = 0;
let prevActive = 0;

changeSlides();
let int = setInterval(changeSlides, 4000);

function changeSlides() {
	slides[prevActive].classList.remove('active');
	controls[prevActive].classList.remove('active');

	slides[activeSlide].classList.add('active');
	controls[activeSlide].classList.add('active');
	
	prevActive = activeSlide++;
	
	if(activeSlide >= slides.length) {
		activeSlide = 0;
	}
	
	console.log(prevActive, activeSlide);
}

controls.forEach(control => {
	control.addEventListener('click', () => {
		let idx = [...controls].findIndex(c => c === control);
		activeSlide = idx;

		changeSlides();

		clearInterval(int);
		int = setInterval(changeSlides, 4000);
	});
});

// Navbar toggle

var hamburger = document.querySelector('.nav-menus');
var hamBtn = document.querySelector('.ham-1');
var crossOne = document.querySelector('.h-1');
var crossTwo = document.querySelector('.h-2');
var crossThree = document.querySelector('.h-3');

hamBtn.addEventListener('click', () => {
    hamburger.classList.toggle('pro-active');
    crossOne.classList.toggle('h-cross1');
    crossTwo.classList.toggle('h-cross2');
    crossThree.classList.toggle('h-cross3');
});


 


// reveal//////

 // reveal website 

 window.addEventListener('scroll', reveal);

 function reveal() {
   var reveals = document.querySelectorAll('.reveal');
 
   for (var i = 0; i < reveals.length; i++) {
	 var windowHeight = window.innerHeight;
 
	 var revealtop = reveals[i].getBoundingClientRect().top;
 
	 var revealPoint = 50;
 
	 if (revealtop < windowHeight - revealPoint) {
	   reveals[i].classList.add('active');
	 }
	 else {
	   reveals[i].classList.remove('active');
     }
 
     
   }
 }

/***********FAQ********************** */


// <!-- FAQ'S  -->

const buttons = document.querySelectorAll("#button");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
})



