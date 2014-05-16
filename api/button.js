( function() {
	'use strict';

	// Controller for buttons. Translates the bold command into the bold
	// button view and control interaction.
	V5.Button = function Button( commandName ) {
		// Pick our command.
		var command = V5.commands[ commandName ];

		// The "View Model" object, implementing the interface known by the view.
		var viewModel = this._viewModel = new V5.ViewModel( {
			label: command.name,
			state: command.value
		}, {
			click: function() {
				command.exec();
			}
		} );

		// Watch for changes in the command value and update the view.
		command.on( 'value', function( e ) {
			var validationResult = this.validateStatus();

			if ( validationResult )
				viewModel.set( 'state', e.value );
			else
				e.preventDefault();

		}, this );

		// Creates the view
		var view = this._view = new V5.Button.View( viewModel );
	};
	V5.Button.prototype = {
		// Alternatively it could return or expose its "main element".
		appendTo: function( el ) {
			el.appendChild( this._view.el );
		},

		validateStatus: function( value ) {
			// fake validation based on current minute.
			// even minutes result as true
			return !( new Date().getMinutes() % 2 );
		}
	};

	V5.Button.ViewPrototype = function ButtonViewPrototype( model ) {
		this.setState( model.get( 'state' ) );

		this.el.addEventListener( 'click', function( evt ) {
			model.click();
		} );

		model.on( 'change:state', function( e ) {
			this.setState( e.value );
		}, this );
	};

} )();