( function() {
	'use strict';

	V5.Button.View = V5.Tools.subClass( V5.Button.ViewPrototype, function ButtonView( model ) {
		var el = this.el = document.createElement( 'button' );
		el.innerHTML = model.get( 'label' );

		V5.Button.ViewPrototype.call( this, model );
	}, {
		setState: function( newState ) {
			this.el.className = newState ? 'button-on' : 'button-off';
		}
	} );

} )();