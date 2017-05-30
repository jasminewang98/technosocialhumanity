// JavaScript Document
$(document).ready(function(e) { 
	$('.popupNote').hide();
	$('.trigger').mouseover(function() {
		var ttLeft,
		    ttTop,
			$this=$(this),
			$tip = $($this.attr('data-popupNote')),
		    triggerPos = $this.offset(),
		    triggerH = $this.outerHeight(),
		    triggerW = $this.outerWidth(),
			tipW = $tip.outerWidth(),
		    tipH = $tip.outerHeight(),
		    screenW = $(window).width(),
			scrollTop = $(document).scrollTop();
		
		if (triggerPos.top - tipH - scrollTop > 0 ) {
			ttTop = triggerPos.top - tipH - 10;
		} else {
			ttTop = triggerPos.top + triggerH +10 ;			
		}
		
		var overFlowRight = (triggerPos.left + tipW) - screenW;	
		if (overFlowRight > 0) {
			ttLeft = triggerPos.left - overFlowRight - 10;	
		} else {
			ttLeft = triggerPos.left;	
		}
		
		
		$tip
		   .css({
			left : ttLeft ,
			top : ttTop,
			position: 'absolute'
		    })
			.fadeIn(200);
	}); // end mouseover
	$('.trigger').mouseout(function () {
		$('.popupNote').fadeOut(200);
	}); // end mouseout
}); // end ready
