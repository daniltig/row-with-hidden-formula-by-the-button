clickArrow.clicked = false;
function clickArrow(event){

   clickArrow.clicked = !clickArrow.clicked;
   if (clickArrow.clicked) {
      event.target.innerHTML = "&#9658"
      event.target.parentElement.querySelector(".arrowFormula").style.display = "flex";
   }
   else{
      event.target.innerHTML = "&#9668"
      event.target.parentElement.querySelector(".arrowFormula").style.display = "none";
   }

}
