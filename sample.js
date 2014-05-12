// Simulate a list of commands registered in the API.
V5.commands = {
	Bold: new V5.Command( {
		name: 'Bold'
	} ),
	Italic: new V5.Command( {
		name: 'Italic'
	} )
};

var boldButtonController = document.body.appendChild( ( new V5.ButtonController( 'Bold' ) ).view.el );
var italicButtonController = document.body.appendChild( ( new V5.ButtonController( 'Italic' ) ).view.el );
