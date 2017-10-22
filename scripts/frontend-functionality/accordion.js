$(document).ready(function() {

    $('.accordion-section-title').click(function(e){
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

	$(this).toggleClass('active');
	$('.accordion ' + currentAttrValue).toggleClass('open');
        e.preventDefault();
    });
});
