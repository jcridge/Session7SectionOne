$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    random();
	document.getElementById("returnedResult").innerHTML = random();
	//beep three time
	navigator.notification.beep(3);
  });            
});            

function random() {
	//console.log("Running function");
	return !Math.round(Math.random()); 
}



