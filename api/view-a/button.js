( function() {
	'use strict';

	V5.ButtonView = function ButtonView( model ) {
		var el = this.el = document.createElement( 'button' );
		el.innerHTML = model.get( 'label' );
		this.setState( model.get( 'state' ) );

		el.addEventListener( 'click', function() {
			model.click();
		} );
		model.on( 'change:state', function() {
			this.setState( model.get( 'state' ) );
		}, this );
	};

	V5.ButtonView.prototype = {
		setState: function( newState ) {
			this.el.className = newState ? 'button-on' : 'button-off';
		}
	};

} )();