	$('.input_number').click(function(){ 
	    var number=$(this).text();                         // BUTTON-დან ვიღებ მნიშვნელობას 
		var value=$('input').val()+number;                 // თუ წილადია ემატება 
         $('input').val(value);                            // გადაეცემა  INPUTs
	});
	$('.clear_input').click(function(){                    //  INPUt ველის გასუფთავება 
		$('input').val('');
	});
	var first_number;                                      // იქმნება პირველი რიცხვი   
	$('.action').click(function(){  
		first_number=parseFloat($('input').val());         // გაიპარსება  FLOAT 
		type_action=$(this).text();                        // ემატება ატტრიბუტი 
		$('input').val('');                                // INPUTს ვასუთავებთ
	});

	$('.get_result').click(function(){  
		var second_number=parseFloat($('input').val());     // იქმნება მეორე ცვლადი იპარსება 

		                                                    // ვამოწმებ ატრბიუტის მნიშვნელობას + - * / 
		if(type_action=='-'){
			var result=first_number-second_number;
		}
		if(type_action=='+'){
			var result=first_number+second_number;
		}
		if(type_action=='*'){
			var result=first_number*second_number;
		}
		if(type_action=='/'){
			var result=first_number/second_number;
		}
		result=result.toFixed(2);                            // ვამრგვალებ მეასედამდე 

		$('input').val(result); 

	});

