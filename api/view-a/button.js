( function() {
	'use strict';

	V5.Button.View = function ButtonView( model ) {
		var el = this.el = document.createElement( 'button' );
		el.innerHTML = model.get( 'label' );

		V5.Button.ViewPrototype.call( this, model );
	};
	V5.Button.View.prototype = Object.create( V5.Button.ViewPrototype.prototype );

	V5.Tools.extend( V5.Button.View.prototype, {
		setState: function( newState ) {
			this.el.className = newState ? 'button-on' : 'button-off';
		}
	} );

} )();