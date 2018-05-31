	var lights = 'on';

	function switchlights() {
		if(lights == 'on'){
		$('body').addClass('');
		lights = 'off';
	} else{
		$('body').removeClass('dark');
		lights = 'on';
	}
}	

$('#light_switch').click(switchlights);