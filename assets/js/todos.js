//check off specific Todos By Clicking
$('ul').on('click', 'li', function(){
	$(this).toggleClass('completed');
});

//click on X to delete Todo
$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
		});
	event.stopPropagation();
});

   $("input[type='text']").keypress(function(event){
  	if(event.which === 13){
  		//grabbing new todo text from input
  		var newToDoText = $(this).val();

  		// WRONG // $("input[type='text']") === ""; WRONG
 		 $(this).val(""); //CORRECT

  		//create a new li and add to ul
  	 	$("ul").append("<li><span><i class ='fa fa-trash'></span></i> " + newToDoText + "</li>");
  	}
  });

 
//plus sign functionality
  $("#plusSpan").on('click', function () {
  	$("input[type='text']").fadeToggle()
  });