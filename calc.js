$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };
	var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
    $("#numbers a").not("#clear,#clearall").click(function(){
		number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
    });
    $("#operators a").not("#equals").click(function(){
		operator += $(this).text();
		newnumber = number;
		number = "";
		totaldiv.text("0");
    });
	$("#others a").click(function(){
		operator = $(this).text();
		number = number;
		totaldiv.text(number);
	});
    $("#clear,#clearall").click(function(){
		number = "";
		totaldiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newnumber = "";
		}
    });
     $("#equals").click(function(){
	// alert("hey"); debugger
		if (operator === "+"){
			number = (parseFloat(number, 10) + parseFloat(newnumber,10)).toString(10);
		} else if (operator === "-"){
			number = (parseFloat(newnumber, 10) - parseFloat(number,10)).toString(10);
		} else if (operator === "/"){
			number = (parseFloat(newnumber, 10) / parseFloat(number,10)).toString(10);
		} else if (operator === "*"){
			number = (parseFloat(newnumber, 10) * parseFloat(number,10)).toString(10);
		} 
		totaldiv.text(number);
		testNumLength(number);
		number = "";
		newnumber = "";
    });
	$("#others").click(function(){
		if(operator === "x^2"){
			number = (parseFloat(number, 10) * parseFloat(number, 10));
		} else if (operator === "1/x"){
		//debugger
			number = (1 / parseFloat(number, 10));
		}		
		totaldiv.text(number.toFixed(2));
		testNumLength(number);
		number = "";
		newnumber = "";
	});
	
});
