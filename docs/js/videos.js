function init_images() {
	var LIGHTBOX_BACKGROUND = document.getElementById( "lightbox-background" ),
		LIGHTBOX_OVERLAY = document.getElementById( "lightbox-overlay" ),
		LIGHTBOX_ITEM = document.getElementById( "lightbox-item" ),
		LIGHTBOX_INNER = document.getElementById( "lightbox-inner" ),
		SCROLL_BUTTON = document.getElementById( "scroll-button" );

	var lightbox = {};
	lightbox[ "video" ] = false;

	function handle_lightbox_interact( clientX, clientY ) {
		var MIN_X, MAX_X, MIN_Y, MAX_Y;
		MIN_X = 0.05 * window.innerWidth;
		MAX_X = 0.95 * window.innerWidth;
		MIN_Y = 0.05 * window.innerHeight;
		MAX_Y = 0.95 * window.innerHeight;
		if( ( clientX < MIN_X || clientX > MAX_X ) || ( clientY < MIN_Y || clientY > MAX_Y ) ) {
			LIGHTBOX_OVERLAY.setAttribute( "class", "hide" );
			LIGHTBOX_BACKGROUND.setAttribute( "class", "hide" );
			LIGHTBOX_INNER.pause();
		}
	}

	function handle_mousedown( evt ) {
		handle_lightbox_interact( evt.clientX, evt.clientY )
	}

	function handle_video_click( evt ) {
		var video = evt.target;
		LIGHTBOX_INNER.src = evt.target.src;
		LIGHTBOX_OVERLAY.setAttribute( "class", "show" );
		LIGHTBOX_BACKGROUND.setAttribute( "class", "show" )
	} 

	LIGHTBOX_OVERLAY.addEventListener( "mousedown", handle_mousedown );

	var VIDEOS = document.getElementsByTagName( "video" );
	for( var i = 0; i < VIDEOS.length; ++i ) {
		if( VIDEOS[ i ].getAttribute( "id" ) ) {}
		else VIDEOS[ i ].addEventListener( "mousedown", handle_video_click );
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