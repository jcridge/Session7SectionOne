$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    random();
	document.getElementById("returnedResult").innerHTML = random();
	if(random() == true){
		console.log("True");
		navigator.notification.beep(2);
	}else{
		console.log("False");
		navigator.notification.beep(1);
		}
  });            
});            

function random() {
	//console.log("Running function");
	return !Math.round(Math.random()); 
}



