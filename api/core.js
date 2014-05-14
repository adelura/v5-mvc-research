var V5 = {
	// Tools.
	Tools: {
		extend: function( target, source ) {
			for ( var prop in source ) {
				if ( source.hasOwnProperty( prop ) ) {
					target[ prop ] = source[ prop ];
				}
			}
		},

		subClass: function( parentConstructor, childConstructor, protoProps ) {
			childConstructor.prototype = Object.create( parentConstructor.prototype );
			if ( protoProps )
				V5.Tools.extend( childConstructor.prototype, protoProps );

			return childConstructor;
		}
	},

	// Minimum event API for model changes notification.
	Events: {
		on: function( eventName, callback, context ) {
			this._events || ( this._events = {} );
			var events = this._events[ eventName ] || ( this._events[ eventName ] = [] );
			events.push( [ callback, context || this ] );
		},

		fire: function( eventName ) {
			var callbacks = this._events && this._events[ eventName ];

			if ( callbacks ) {
				for ( var i = 0; i < callbacks.length ; i++ ) {
					callbacks[ i ][ 0 ].call( callbacks[ i ][ 1 ] );
				}
			}
		}
	}
};

// The base Model class.
V5.ViewModel = function( attributes, properties ) {
	this.attributes = attributes || {};
	properties && V5.Tools.extend( this, properties );
};

V5.ViewModel.prototype = {
	set: function( key, val ) {
		this.attributes[ key ] = val;

		this.fire( 'change:' + key );
	},

	get: function( key ) {
		return this.attributes[ key ];
	}
};

// Add events support.
V5.Tools.extend( V5.ViewModel.prototype, V5.Events );

V5.ViewModel.extend = V5.Tools.subClass.bind( null, V5.ViewModel );