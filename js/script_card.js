const carousel = document.querySelector(".carousel");

let isDragging = false;

const dragStart = () =>{
    isDragging = true;
}

const dragging = (e) =>{
    if(!isDragging) return; //if isDragging is false return from here
   carousel.scrollLeft = e.pageX;

}

carousel.addEventListener("mousemove", dragStart);
carousel.addEventListener("mousemove", dragging);