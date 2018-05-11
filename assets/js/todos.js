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

  
 
//plus sign functionality
  $("#plusSpan").on('click', function () {
  	$("input[type='text']").fadeToggle()
  });