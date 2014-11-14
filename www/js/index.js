$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    random();
  });            
});            

function random() {
	console.log("Running function");
	return !Math.round(Math.random()); 
	document.getElementById("returnedResult").innerHTML = Math.random();
}