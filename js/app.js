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

   var portfolio = document.getElementById("portfolio");
   var menu = document.getElementsByClassName("portfolio")[0];
   if(distanceY > shrinkOn){
   		menu.classList.add("portfolio-scroll");
   }
 });

