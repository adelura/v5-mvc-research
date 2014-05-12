// The model that represents an editor command.
V5.Command = V5.Model.extend( {
	exec: function() {
		// By default, should do nothing.

		// For testing let's just switch the command value.
		this.set( 'value', !this.get( 'value' ) );

		console.log( 'Executed command: ' + this.get( 'name' ) + '. Current value: ' + this.get( 'value' ) );
	}
} );
