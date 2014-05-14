// Simulate a list of commands registered in the API.
V5.commands = {
	Bold: new V5.Command( 'Bold' ),
	Italic: new V5.Command( 'Italic', true )
};

var boldButton = new V5.Button( 'Bold' );
document.body.appendChild( boldButton.view.el );

var italicButton = new V5.Button( 'Italic' );
document.body.appendChild( italicButton.view.el );
