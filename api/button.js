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
		command.on( 'value', function() {
			viewModel.set( 'state', command.value );
		} );

		// Creates the view
		var view = this._view = new V5.Button.View( viewModel );
	};
	V5.Button.prototype = {
		// Alternatively it could return or expose its "main element".
		appendTo: function( el ) {
			el.appendChild( this._view.el );
		}
	};

	V5.Button.ViewPrototype = function ButtonViewPrototype( model, tagName ) {
		this.model = model;
		this.createElement( tagName );
		this.makeVMBindings();
		this.initBasedOnVM();
	};

	V5.Button.ViewPrototype.prototype = {
		/**
		 * Add callbacks which will be called on model changes.
		 */
		makeVMBindings: function() {
			for ( var i in this.modelBindings ) {
				this.model.on( i, this.modelBindings[ i ], this );
			}
		},

		/**
		 * Call appropriate init methods based on keys passed in config.
		 */
		initBasedOnVM: function() {
			for ( var i = 0; i < this.initVMKeys.length; i += 1 ) {
				var key = this.initVMKeys[ i ],
					keyUpper = key.charAt( 0 ).toUpperCase() + key.slice( 1 ); // Uppercase first char

				this[ 'set' + keyUpper ]( this.model.get( key ) );
			}
		},

		/**
		 * @param {String=} tagName
		 */
		createElement: function( tagName ) {
			tagName = tagName || 'div';
			this.el = document.createElement( tagName );
		}
	};

} )();