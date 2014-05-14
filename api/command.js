( function() {
	'use strict';

	// Simple command for demonstration purposes.
	// It's totally unrealistic, because it merges command class and command button definition.
	V5.Command = function Command( name, value ) {
		this.name = name;
		this.value = !!value;
	};

	V5.Command.prototype = {
		exec: function() {
			// By default, should do nothing.

			// For testing let's just switch the command value.
			// Again - totally unrealistic - in real case it would be extracted
			// and actually we have a state not value, and the state has a special control logic.
			this.value = !this.value;
			this.fire( 'value', this.value );

			console.log( 'Executed command: ' + this.name + '. Current value: ' + this.value );
		}
	};

	V5.Tools.extend( V5.Command.prototype, V5.Events );

} )();