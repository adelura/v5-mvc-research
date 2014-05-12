V5.ButtonView = function( model ) {
	var el = this.el = document.createElement( 'span' );
	el.innerHTML = '<input type="checkbox">' + model.get( 'label' );
	el.className = 'checkbutton button-off';

	var checkbox = el.getElementsByTagName( 'input' )[ 0 ];
	checkbox.addEventListener( 'change', function() {
		model.click();
	} );

	model.on( 'change:state', function() {
		var state = model.get( 'state' );

		checkbox.checked = state;

		el.className = state ?
			'checkbutton button-on' :
			'checkbutton button-off';
	} );
};