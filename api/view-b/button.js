( function() {
	'use strict';

	V5.Button.View = V5.Tools.subClass( V5.Button.ViewPrototype, function ButtonView( model ) {
		var el = this.el = document.createElement( 'label' );
		el.innerHTML = '<input type="checkbox">' + model.get( 'label' );
		el.className = 'checkbutton';
		this.checkbox = el.firstChild;

		V5.Button.ViewPrototype.call( this, model );
	}, {
		setState: function( newState ) {
			this.el.classList.add( newState ? 'button-on' : 'button-off' );
			this.el.classList.remove( newState ? 'button-off' : 'button-on' );
			this.checkbox.checked = newState;
		}
	} );

} )();