$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    random();
	document.getElementById("returnedResult").innerHTML = random();
	if(random() == true){
		console.log("True");
		navigator.notification.beep(2);
		navigator.notification.vibrate(2000);
	}else{
		console.log("False");
		window.setInterval(
			function(){
				navigator.notification.beep(1)
			},
			3000
		);
		}
  });            
});            

function random() {
	//console.log("Running function");
	return !Math.round(Math.random()); 
}



