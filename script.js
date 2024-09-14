//your code here
let draggedImage = null;
document.addEventListener("DOMContentLoaded", () => {
	const images = document.querySelectorAll(".image");
	images.forEach((image) => {
		//Drag start
		image.addEventListener("dragstart", (e) => {
			draggedImage = e.target;
			e.target.classList.add("selected");
		});
		//dragging end
		image.addEventListener("dragend", (e) => {
			e.target.classList.remove("selected");
		});
		// Prevent default behavior to allow dropping
		image.addEventListener("dragover", (e) => {
			e.preventDefault();
		});
		// Handle the drop event
		image.addEventListener("drop", (e) => {
			e.preventDefault();
			if(draggedImage && draggedImage !== e.target){
				// Swap the background images of draggedImage and the drop target
				let draggedImageStyle = window.getComputedStyle(draggedImage).backgroundImage;
				let targetedImageStyle = window.getComputedStyle(e.target).backgroundImage;
				draggedImage.style.backgroundImage = targetedImageStyle;
				e.target.style.backgroundImage = draggedImageStyle;
			}
		});
	});
});