
$(function () {
 
 
 $('#headerNav .divInHeader').mouseenter( handlerIn ).mouseleave( handlerOut );
        function handlerIn(event) {	$(this).addClass('greenContainerInMenuInHeader'); 	}
		function handlerOut(event) {	$(this).removeClass('greenContainerInMenuInHeader'); 	}
 
  $('.imagInHeader').mouseenter( handlerInOpacity ).mouseleave( handlerOutOpacity );
		function handlerInOpacity(event) {	$(this).addClass('active'); 	}
		function handlerOutOpacity(event) {	$(this).removeClass('active'); }
	
  $('#headerNav li').mouseenter( handlerInOpacityBack ).mouseleave( handlerOutOpacityBack );
		function handlerInOpacityBack(event) {	$(this).addClass('active1'); 	}
		function handlerOutOpacityBack(event) {	$(this).removeClass('active1'); }
 

 $('.image.shadow').hover(makeVisible,makeInVisible) ;
  
    function makeVisible(event) {	
	$(this).removeClass('shadow');   }
  
  function makeInVisible(event) {	
	$(this).addClass('shadow');    }
 
 
	$('.image.shadow').click(showInfo) ;

	function showInfo(event) {	
	$('#transparentFullscreenDiv').fadeIn(1000);
	 	
		var indetifireOfClicked = this.dataset.ymax;
		var indetifireOfClickedEnd = "#imGallery" + indetifireOfClicked + "Hidden";
		 $(indetifireOfClickedEnd).fadeIn(1000);
		 
	}

	
	$('.forClosing').click(hideInfo) ;
	
	function hideInfo(event) {	
	$('#transparentFullscreenDiv').fadeOut(700);
	 $('.popImage').fadeOut(500);
		 
	}
	

 });
