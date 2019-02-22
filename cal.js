// Khac Duy Trinh

var numbers = $(".numbers");
var equality = $("#equality");
var screenText = $("#screenText");
var operators = $(".operators");
var clr = $("#clr");
var del = $("#del");
var symbols = $(".symbols");
var input = "0";
var arrNumber = [];
var arrSymbol = [];
var finalMath = "";
var maximum = 21; // The maximum number that screen can display

// Click listener for "1-9" buttons
numbers.on("click", function(){
	if( input.length < maximum ){
		input += $(this).text();
		if(input.charAt(0) === "0"){
			input = input.slice(1, input.length);
		}
		screenText.text(input);
	}
});

// Click listener for math operators "+, -, *, /" buttons
operators.on("click", function(){
	screenText.text( $(this).text() );
	arrSymbol.push( $(this).text() );
	arrNumber.push(input);
	input = "0";
});

// Click listener for equal symbol button
equality.on("click", function(){
	arrNumber.push(input);
	for(var i=0; i< arrNumber.length; i++)
	{
		finalMath += arrNumber[i];
		if(i<arrSymbol.length){
			finalMath += arrSymbol[i];
		}
	}
	screenText.text( math.eval(finalMath) );
});

// Click listener for the Clear button
clr.on("click", function(){
	input = "0";
	finalMath = "0";
	arrNumber = [];
	arrSymbol = [];
	screenText.text(input);
});

// Click listener for the Delete button
del.on("click", function(){
	if(input.length == 1)
	{
		input = "0";
	} else
	{
	input = input.slice(0, -1);
	}
	screenText.text(input);
});

// Click listener for the "." symbol
symbols.on("click", function(){
	input += $(this).text();
	screenText.text(input);
});



