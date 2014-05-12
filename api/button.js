// Controller for buttons. Translates the bold command into the bold
// button view and control interaction.
V5.ButtonController = function( commandName ) {
	// Pick our command.
	var command = V5.commands[ commandName ];

	// The "View Model" object, implementing the interface known by the view.
	var viewModel = this.viewModel = new V5.Model( {
		label: command.get( 'name' )
	}, {
		click: function() {
			command.exec();
		}
	} );

	// Watch for changes in the command value and update the view.
	command.on( 'change:value', function() {
		viewModel.set( 'state', command.get( 'value' ) );
	} );

	// Creates the view
	var view = this.view = new V5.ButtonView( viewModel );
};