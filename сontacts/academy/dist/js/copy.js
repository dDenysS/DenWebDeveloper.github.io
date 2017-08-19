window.addEventListener('load', function(){
	var navItems = document.querySelector('.nav__items');
	var toggleButton = document.querySelector('.nav__toggle');
	var showSchedule = document.querySelector('.header__info--work');
	var status;
	var navButton = document.querySelector('.nav__button');


	showSchedule.addEventListener('click', function(){
		var showBlock = document.querySelector('.header__time');
		if(status) {
			showBlock.style.opacity = '0';
			status = false;
		} else {
			showBlock.style.opacity = '1';
			status = true;
		}
	});

	toggleButton.addEventListener('click', function(){
		navItems.classList.toggle('active');
		toggleButton.classList.toggle('active');
	});

	setNumber('.banner__dots','.banner__slides');
});


function setNumber(elementName, sliderBlock) {
	var element = document.querySelector(elementName);
	var sliderBlock =  document.querySelector(sliderBlock);
	var dotsBlock = document.querySelector('.banner__dots');
	var numberLastElement;
	var sign = '-';
	element.childNodes.forEach(function(item, i, arr){
		item.dataset.number = i;
		numberLastElement = i;
	}); 

	var sliderInterval = setInterval(function() {
		var currentLeft = parseInt(sliderBlock.style.left) | 0;
		if(sliderBlock.style.left == -(+numberLastElement)*100 + '%') {
			sign = '+';
		}		
		if(sliderBlock.style.left == 0 + '%') {
			sign = '-';
		}
		sliderBlock.style.left = +(sign+100) + currentLeft + '%';
		var elementNumber = sliderBlock.style.left.charAt(1) | 0;
		activeDot(dotsBlock.children[elementNumber]);
	}, 10000);
}

function setLeft(e,sliderBlock) {
	var sliderBlock =  document.querySelector(sliderBlock);
	var numberElement = e.dataset.number;
	sliderBlock.style.left = '-' + (numberElement*100) + '%';
	if(sliderBlock.className == 'banner__slides') {
		activeDot(e);
	}
}

function activeDot(element) {
	var parentBlock =  element.parentNode;
	for(var i = 0; i < parentBlock.children.length; i++) {
		parentBlock.children[i].classList.remove('banner__dot--active');
	}
	element.classList.add('banner__dot--active');
}

