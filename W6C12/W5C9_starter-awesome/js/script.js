$(document).ready(function(){	
	/*********** PUT THINGS HERE ****************/

	/****** QUESTION 1 ************/
	document.getElementById('return5th_submit').onclick = function(){
			var text = document.getElementById('return5th_input').value;
			document.getElementById('return5th_display').innerHTML = text.charAt(4);
	}
    /****** QUESTION 2 ************/
    // Same as above except output second to last char of a input string
	document.getElementById('returnLast_submit').onclick = function(){
			var text = document.getElementById('returnLast_input').value;
			document.getElementById('returnLast_display').innerHTML = text.charAt(text.length-2);
	}


	/****** QUESTION 3 ************/
	// Check to see if a word exists in a hard-coded paragraph, display "YES" if found and "NO" if not
	document.getElementById('checkWork_submit').onclick = function(){
    	var str = document.getElementById('searchParagraph').innerHTML;
    	var searchFor = document.getElementById('checkWork_input').value;
    	var exists = str.includes(searchFor);
    	document.getElementById("Demo").innerHTML = exists;
	}


	/****** QUESTION 4 ************/
	// Reverse string inputted by user
	$('#reverseString_submit').click(Reverse);

	function Reverse(){
	var oneway = $('#reverseString_input').val();
	var backway = oneway.reverse();	
	$('#reverseString_display').html('backway');

	};	
	
	



	/****** QUESTION 5 ************/
	// Output HELLO WORLD into a div, but you must first store "hello world" into a variable and then output the variable
	$('#helloworld_submit').click(function() {
		var hello = 'HELLO WORLD';
		$('#helloworld_display').html(hello);
	});


	/****** QUESTION 6 ************/
	// Provide an input for user to type their name and greet them with their name "Hello BLANK, welcome to the website" should go in greet1 display

	$('#greet1_submit').click(function() {
		var name = $('#greet1_input').val();
		$('#greet1_display').html('Yo '+name+' welcome to the website');
	});


	/****** QUESTION 7 ************/
	// Do the same as above but only greet them if their names are Alice, Bob, or YOUR NAME

	$('#greet2_submit').click(function(){
		var nameInput = $('#greet2_input').val();
			nameInput = nameInput.toLowerCase();
		var name = $('#greet2_input').val();
		if (nameInput == 'alice'||nameInput=='bob'||nameInput=='marlene') {
			$('#greet2_display').html('Hello '+name+', welcome to the website')		
		}

		else {
			$('#greet2_display').html('Go Away');
		}
	});


	/****** QUESTION 8 ************/
	// Accept two integers from the user and display the larger
	$('#integerMax_submit').click(function(){
		var value1 = $('#integerMax_input1').val(); 
		var value2 = $('#integerMax_input2').val(); 

		if (value1 > value2) {
			$('#integerMax_display').html(value1)
		} 

		else {
			$('#integerMax_display').html(value2)
		}
 
	});

	/****** QUESTION 9 ************/
	// Accept three integers from the user and display the SIGN of the product of the three (aka: display + or -)



	/****** QUESTION 10 ************/
	// Write a JavaScript program to sort three numbers. Display them in order from greatest to smallest
	$('#integerSort_submit').click(function(){
		var value1 = $('#integerMax_input1').val();
		var value2 = $('#integerMax_input2').val();
		var value3 = $('#integerMax_input3').val();
		var numbers = $("value1","value2","value3"); 
		$('#integerSort_display').html(value3)


 
	});


	/****** QUESTION 11 ***********/
	// Write a function called play() to play rock, paper, scissors and output the winner (player 1 or player 2). This requires ressearch on how to make a function



	/****** QUESTION 12 ***********/
	// Calculate the factoral of a number inputted by the user



	/****** QUESTION 13 ***********/
	//Write a JavaScript program to construct the following pattern:
	//*
	//**
	//***
	//****
	//*****				


	/****** QUESTION 14 ***********/
	//Write a function that multiplies a base by itself a certain number of times (exponent)

	/****** QUESTION 15 ***********/
	//Write a program that prints the numbers from 1 to 100. But for multiples of three print "Foo" instead of the number and for the multiples of five print "Bar". For numbers which are multiples of both three and five print "FooBar"
	
	
});	
