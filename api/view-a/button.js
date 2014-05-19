( function() {
	'use strict';

	V5.Button.View = V5.Tools.subClass( V5.Button.ViewPrototype, function ButtonView( model ) {
		// We can make it more configurable, not just array of model keys
		this.initVMKeys = [ 'state', 'label' ];

		// Key is a model event, and value is callback
		this.modelBindings = {
			'change:state': this.setState
		};

		V5.Button.ViewPrototype.call( this, model, 'button' );

		// This also could be moved to some setup object (Just like in Backbone view.)
		this.el.addEventListener( 'click', function( evt ) {
			model.click();
		} );

	}, {
		setState: function( newState ) {
			this.el.className = newState ? 'button-on' : 'button-off';
		},
		setLabel: function( text ) {
			this.el.innerHTML = text;
		}
	} );

} )();