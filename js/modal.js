
$(document).ready(function () {
	  $(function() {
// When the user clicks on the button, open the modal 
		//$('#myBtn').on('click', function() {
		    //$(".modal").css("display","block");
		    //console.log("test");
		//});

		// When the user clicks on <span> (x), close the modal
		$('.close').on('click', function() {
		    $(".modal").css("display","none");
		});
	});
});
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }