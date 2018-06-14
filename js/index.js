jQuery(document).ready(function( $ ){
 function alerts (alert1, alert2, alert3, alert4) { 	//function calling all alerts
		 var hours = new Date().getHours(); 	//get time by hours

	 if (alert1 == undefined) {			// if statement that fills the alert if undefined 
		 alert1=0;
	 }

	 if (alert2 == undefined) {
		 alert2=12;
	 }

	 if (alert3 == undefined) {
		 alert3=17;
	 }

	 if (alert4 == undefined) {
		 alert4=24;
	 }

 if (hours >= alert1 && hours < alert2) {		//check if the time is between alert1 and alert 2, if than so execute
		 document.body.style.backgroundColor = "blue";
 } else if (hours >= alert2 && hours < alert3) {
				 document.body.style.backgroundColor = "red";
 } else if (hours >= alert3 && hours < alert4) {
				 document.body.style.backgroundColor = "green";
 } else {

 }

 }
 alerts(a, b, c, d); 
 }); 							//end Jquery 
