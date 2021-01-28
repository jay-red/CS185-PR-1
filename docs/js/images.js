function init_images() {
	var LIGHTBOX_BACKGROUND = document.getElementById( "lightbox-background" ),
		LIGHTBOX_OVERLAY = document.getElementById( "lightbox-overlay" ),
		LIGHTBOX_ITEM = document.getElementById( "lightbox-item" ),
		LIGHTBOX_INNER = document.getElementById( "lightbox-inner" ),
		SCROLL_BUTTON = document.getElementById( "scroll-button" );

	var lightbox = {};
	lightbox[ "mouse_inside" ] = false;

	function handle_lightbox_interact( clientX, clientY ) {
		var MIN_X, MAX_X, MIN_Y, MAX_Y;
		if( window.innerWidth > window.innerHeight ) {
		 	MIN_X = ( window.innerWidth - window.innerHeight * 0.9 ) / 2.0;
		 	MAX_X = ( window.innerWidth - window.innerHeight * 0.9 ) / 2.0 + window.innerHeight * 0.9;
		 	MIN_Y = window.innerHeight * 0.05;
		 	MAX_Y = window.innerHeight * 0.95;
		} else {
			MIN_X = window.innerWidth * 0.05;
			MAX_X = window.innerWidth * 0.95;
			MIN_Y = ( window.innerHeight - window.innerWidth * 0.9 ) / 2.0;
			MAX_Y = ( window.innerHeight - window.innerWidth * 0.9 ) / 2.0 + window.innerWidth * 0.9;
		}
		if( ( clientX < MIN_X || clientX > MAX_X ) || ( clientY < MIN_Y || clientY > MAX_Y ) ) {
			LIGHTBOX_OVERLAY.setAttribute( "class", "hide" );
			LIGHTBOX_BACKGROUND.setAttribute( "class", "hide" );
		}
	}

	function handle_mousedown( evt ) {
		handle_lightbox_interact( evt.clientX, evt.clientY )
	}

	function handle_image_click( evt ) {
		LIGHTBOX_INNER.setAttribute( "class", evt.target.className.replace( "gallery-item ", "lightbox-item " ).trim() );
		LIGHTBOX_OVERLAY.setAttribute( "class", "show" );
		LIGHTBOX_BACKGROUND.setAttribute( "class", "show" );
	} 

	LIGHTBOX_OVERLAY.addEventListener( "mousedown", handle_mousedown );

	var IMAGES = document.getElementsByClassName( "gallery-item" );
	for( var i = 0; i < IMAGES.length; ++i ) {
		IMAGES[ i ].addEventListener( "mousedown", handle_image_click );
	}

	console.log( "image" );

	function handle_scroll() {
		if( document.scrollingElement.scrollTop < document.scrollingElement.scrollHeight * 0.25 ) {
			SCROLL_BUTTON.setAttribute( "class", "hide" );
		} else {
			SCROLL_BUTTON.setAttribute( "class", "show" );
		}
	}

	function handle_scroll_top() {
		document.scrollingElement.scrollTop = 0;
	}

	window.addEventListener( "scroll", handle_scroll );
	SCROLL_BUTTON.addEventListener( "mousedown", handle_scroll_top );
	handle_scroll();
}

window.addEventListener( "load", init_images );