V5.ButtonView = function( model ) {
	var el = this.el = document.createElement( 'button' );
	el.innerHTML = model.get( 'label' );
	el.className = 'button-off';
	el.addEventListener( 'click', function() {
		model.click();
	} );

	model.on( 'change:state', function() {
		el.className = model.get( 'state' ) ?
			'button-on' :
			'button-off';
	} );
};