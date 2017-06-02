/*
 * Archivo principal de JS
 */

 //CREANDO MENU
 window.addEventListener('scroll', function () {
   const distanceY = window.pageYOffset || document.documentElement.scrollTop,
   shrinkOn = 200,
   headerEl = document.getElementsByTagName("nav")[0];

   if (distanceY > shrinkOn) {
     headerEl.classList.add("scroll-menu");
   } else {
     headerEl.classList.remove("scroll-menu");
   }

   var contact = document.getElementById("contact");		
   var menuContact = document.getElementsByClassName("contact")[0];

   var portfolio = document.getElementById("portfolio");		
   var menu = document.getElementsByClassName("portfolio")[0];

   var about = document.getElementById("about");		
   var menuAbout = document.getElementsByClassName("about")[0];

   if(distanceY >= 600){
   		menu.classList.add("menu-scroll-hover"); // cambiando el color a portfolio
   } else if (distanceY < 600) {
   		menu.classList.remove("menu-scroll-hover");

   }
 	if(distanceY >= 1700){
   		menuAbout.classList.add("menu-scroll-hover");	// cambiando el color a about
   		menu.classList.remove("menu-scroll-hover");

 	} else if(distanceY >= 2200 || distanceY <= 1700){
   		menuAbout.classList.remove("menu-scroll-hover");

 	}

 	if(distanceY > 2200){
   		menuContact.classList.add("menu-scroll-hover"); // cambiando el color de contact
   		menuAbout.classList.remove("menu-scroll-hover");

 	}else if (distanceY >= 2400 || distanceY < 2200) {
 		menuContact.classList.remove("menu-scroll-hover");
 	}
 });



//CREANDO GALERIA
(function portfolio (){
	var gallery = document.getElementById("gallery");
	var portfolioInfo = Array.from(document.getElementsByClassName("portfolio-info"));
	var imageGallery = document.getElementsByClassName("image-gallery")[0];
	var close = document.getElementsByClassName("fa-times")[0];
	var closeBtm = document.getElementById("button-bottom");
	var image;

	portfolioInfo.forEach(function(pic){
		pic.addEventListener("click", function(){
			gallery.style.display = 'block';
			imageGallery.innerHTML = pic.innerHTML;
 			
 			close.addEventListener("click", function(){
 				gallery.style.display = 'none';
 				
  			})
  			closeBtm.addEventListener("click", function(){
 				gallery.style.display = 'none';
 				
  			})
		})

	})
	
})()

