(function() {

	var bodyEl = document.body,
    content = document.querySelector( '.content-wrap' ),
		openclick = document.getElementById( 'click-effect' ),
		isClicked = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openclick.addEventListener( 'click', toggleClickEffect );

		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openclick ) {
				toggleClickEffect();
			}
		} );
	}

	function toggleClickEffect() {
		if( isOpen ) {
			classie.remove( bodyEl, 'click--effect' );
		}
		else {
			classie.add( bodyEl, 'click--effect' );
		}
		isClicked = !isClicked;
	}

	init();

})();
