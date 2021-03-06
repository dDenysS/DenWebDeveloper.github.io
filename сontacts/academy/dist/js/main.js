window.addEventListener('load', function() {
    slider();
    navToggle();
    miniSlider('.services .section__slider-container .section__items');
});

function slider() {
 	var dotsBlock = document.querySelector('.banner__dots');
 	var controlsBlock = document.querySelector('.banner__controls');
    var showSchedule = document.querySelector('.header__info--work');
    var status;
    var navButton = document.querySelector('.nav__button');
    var sign = '-';
    var sliderBlock = document.querySelector('.banner__slides');
    sliderBlock.style.left = 0;
    var numberLastElement;
    var currentLeft = 0;

    controlsBlock.addEventListener('click', function(e){
    	if(e.target.className + '' == 'banner__dot') {
    		setLeft(e.target,'.banner__slides');
    	}

    	if(e.target.classList[1] == 'banner__arrow--prev'){

    		 if (sliderBlock.style.left != 0 + '%') {
                sliderBlock.style.left = + 100 + currentLeft + '%';
                currentLeft = parseInt(sliderBlock.style.left);
                var elementNumber = sliderBlock.style.left.charAt(1) | 0;
            activeDot(dotsBlock.children[elementNumber]);

            }
    		  
    	}


    	if(e.target.classList[1] == 'banner__arrow--next'){
    		if (-parseInt(sliderBlock.style.left) < (+numberLastElement) * 100) {
                sliderBlock.style.left = - 100 + currentLeft + '%';
                currentLeft = parseInt(sliderBlock.style.left);
                var elementNumber = sliderBlock.style.left.charAt(1) | 0;
            activeDot(dotsBlock.children[elementNumber]);
            }
    	}
    });


    showSchedule.addEventListener('click', function() {
        var showBlock = document.querySelector('.header__time');
        if (status) {
            showBlock.style.opacity = '0';
            status = false;
        } else {
            showBlock.style.opacity = '1';
            status = true;
        }
    });

    setNumber('.banner__dots');

    function setNumber(elementName) {
    	 var element = document.querySelector(elementName);
        element.childNodes.forEach(function(item, i, arr) {
            item.dataset.number = i;
            numberLastElement = i;
        });
        startSlider()
    }

    function setLeft(e,sliderBlock) {
	var sliderBlock =  document.querySelector(sliderBlock);
	var numberElement = e.dataset.number;
	sliderBlock.style.left = '-' + (numberElement*100) + '%';
	if(sliderBlock.className == 'banner__slides') {
		activeDot(e);
	}
}

    function startSlider() {
    	       var sliderInterval = setInterval(function() {
    	       	currentLeft = parseInt(sliderBlock.style.left);
            if (sliderBlock.style.left == -(+numberLastElement) * 100 + '%') {
                sign = '+';
            }
            if (sliderBlock.style.left == 0 + '%') {
                sign = '-';
            }
            sliderBlock.style.left = +(sign + 100) + currentLeft + '%';
            var elementNumber = sliderBlock.style.left.charAt(1) | 0;
            activeDot(dotsBlock.children[elementNumber]);
            currentLeft = parseInt(sliderBlock.style.left);
        }, 10000);
    }

    function activeDot(element) {
        var parentBlock = element.parentNode;
        for (var i = 0; i < parentBlock.children.length; i++) {
            parentBlock.children[i].classList.remove('banner__dot--active');
        }
        element.classList.add('banner__dot--active');
        currentLeft = parseInt(sliderBlock.style.left);
    }
}


function navToggle() {
	var toggleButton = document.querySelector('.nav__toggle');
	var navItems = document.querySelector('.nav__items');

	toggleButton.addEventListener('click', function() {
        navItems.classList.toggle('active');
        toggleButton.classList.toggle('active');
    });
}


function miniSlider(sliderBlock) {
    var numberLastElement;
    var sliderBlock =  document.querySelector(sliderBlock);
    var currentLeft = 0;
    sign = '-';

    for (var i = 0; i < sliderBlock.children.length; i++) {
        sliderBlock.children[i].dataset.number = i;
        numberLastElement = i;
    }

    var sliderInterval = setInterval(function() {
            if (sliderBlock.style.left == '-50%') {
                sign = '+';
            }
            if (sliderBlock.style.left == 0 + '%') {
                sign = '-';
            }
            sliderBlock.style.left = +(sign + 50) + (currentLeft) + '%';
            currentLeft = parseInt(sliderBlock.style.left);
        }, 10000);
}


function sliderMove(e) {
            var sliderBlock = e.parentNode.parentNode.querySelector('.section__slider-container .section__items');
            var numberLastElement = sliderBlock.lastElementChild.dataset.number;
            var currentLeft = parseInt(sliderBlock.style.left);
            if(e.classList[1] == 'section__control--prev'){

             if (sliderBlock.style.left != 0 + '%') {
                sliderBlock.style.left = + 50 + (currentLeft) + '%';
                currentLeft = parseInt(sliderBlock.style.left);

            }
              
        }


        if(e.classList[1] == 'section__control--next'){
            if (-parseInt(sliderBlock.style.left) < (+numberLastElement-2) * 50) {
                sliderBlock.style.left = - 50 + (currentLeft)+ '%';
                currentLeft = parseInt(sliderBlock.style.left);
            }
        }
}