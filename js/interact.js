$(document).ready(function () {


	$(function() {
		var invisible = true;

		$(".fa-info-circle").on('click', function() {
			console.log("yee");
			if (invisible == true) {
				console.log("yete");
				$("#help").css("display","block");
				invisible = false;
			}
			else if (invisible == false){
				$("#help").css("display","none");
				console.log("yete");
				invisible = true;
			}
		});
	});

	  $(function() {
	  	var invisible = true;	
	  	$("#fa-id").on('click', function() {
	  		
	  		if (invisible == true) {
	  			var x = 1;
	  			function myFunction(int) {

	  				$("#li-"+ int).css("display","block");
	  				
	  			};
	  			var start = null;

	  			function step(timestamp) {
				  if (!start) start = timestamp;
				  var progress = timestamp - start;
				  myFunction(x);
				  if (x <= 10) {
				  	x++;
				    window.requestAnimationFrame(step);
				  }
				}

				window.requestAnimationFrame(step);

  				invisible = false;
	  			
	  		}
	  		else if (invisible == false){
	  			var x = 10;
	  			function my_Function(int) {

	  				$("#li-"+ int).css("display","none");
	  			};

	  			var start = null;

	  			function backStep(timestamp) {
				  if (!start) start = timestamp;
				  var progress = timestamp - start;
				  my_Function(x);
				  if (x >= 0) {
				  	x--;
				    window.requestAnimationFrame(backStep);
				  }
				}
	  			
	  			window.requestAnimationFrame(backStep);

	  			invisible = true;
	  		}
	  	});


	  	/*Puzzle Function*////////////////

	  	//a count to determine if an element has been clicked on or not
	  	//basically a boolean
	  	var count = 0;

	  	//this wll store the html info of the first element clicked on
	  	var temp1;
	  	//the id of the first element clicked on
	  	var temp1Class;
	  	//this wll store the html info of the second clicked element
	  	var temp2;
	  	//stores the class of the second clicked element
	  	var temp2Class;

	  	//buttonOrder is the up to date array showing the cuurent id of each box
	  	var buttonOrder = ["p6", "p5", "p4", "p3", "p2", "p1"];
	  	//check shows the correct order. It is compared to button order
	  	//to see if button order is correct
	  	var check = ["p1", "p2", "p3", "p4", "p5", "p6"];
	  	var maxReached = 0;
	   	//when each pieceis clicked on, do the following...
	    $('.puzzle-piece').on('click', function() {

			if (temp1Class == $(this).attr("id")) {
				console.log("clash");
				count = 0;
			}
			//if this is the second element to be clicked...
	    	if (count > 0) {
	    		//store id of clicked item
	    		temp2Class = $(this).attr("id");
	    		//store html info of clicked item
	    		temp2 = $(this).html();
	    		//update clicked item with content of previous clicked item
	    		$(this).html(temp1);
	    		//swap positions of clicked items in buttonOrder

	    
	    		var temp2_index = buttonOrder.indexOf(temp2Class);
	    		var temp1_index = buttonOrder.indexOf(temp1Class);
	    		var temp_temp2 = temp2Class;
	    		var temp_temp1 = temp1Class;
	    		buttonOrder[temp1_index] = temp_temp2;
	    		buttonOrder[temp2_index] = temp_temp1;



	    		//console.log(buttonOrder);

	    		$("#" + temp1Class).html(temp2).removeClass("selected complete");
	    		count = 0;
	    		console.log("check = " + check);
	    		console.log(buttonOrder);
	    		for (var i = 0; i < check.length; i++) {
	   				if (buttonOrder[i] == check[i]) {
	   					$('#' + check[i])
	   					.css("background-color", "#9ad0a9")
	   					.addClass("complete");
	   					maxReached++;
	   					console.log(maxReached);
	   					if (maxReached >= check.length) {
	   						$(".modal").css("display","block");
	   					}
	   					

	   				}
	   				else {console.log("tests" + buttonOrder[i] + check[i])}
	   			}
	   		maxReached=0;
	    	} else{
	    		$(this).addClass("selected").addClass("complete");
	    		temp1 = $(this).html();
	    		temp1Class = $(this).attr("id");
	    		console.log(buttonOrder.indexOf(temp1Class));
	    		count++;
	    	}	    	
	    });
	});
});

