// Simulate a list of commands registered in the API.
V5.commands = {
	Bold: new V5.Command( 'Bold' ),
	Italic: new V5.Command( 'Italic', true )
};

var boldButtonController = document.body.appendChild( ( new V5.ButtonController( 'Bold' ) ).view.el );
var italicButtonController = document.body.appendChild( ( new V5.ButtonController( 'Italic' ) ).view.el );
