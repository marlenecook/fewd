$('#submit').click(compare);

function compare(){	
	var leftSide = Number($('#a').val());
	var rightSide = Number($('#b').val());
	
	$('#comparison').html(">");

	if(leftSide > rightSide){
		$('#comparison').html('>');
	}

	if(rightSide > leftSide){
		$('#comparison').html('<');
	}	

	if(rightSide == leftSide){
		$('#comparison').html('=');
	}	

};


