function loginvalidate(val){

	if(val.pass.value =="" || val.email.value == ""){
		alert("Please fill in the fields")
	}
	else if(val.pass.value <=6 || val.pass.value >=1){
		confirm("Please enter a minimum of 6 characters in the password field")
	}
	else
	{
		confirm("No database to retrieve data from. Try again later");
	}
}


function signupvalidate(val2) {
	
	if(val2.pass.value =="" || val2.email.value == "" ||val2.pass.value ==""){
		alert("Please fill in the fields")
	}
	else if(val2.pass.value <=6 || val2.pass.value >=1){
		confirm("Please enter a minimum of 6 characters in the password field")
	}
	else if(val2.pass.value != val2.pass2.value){
		alert("Please ensure that both Passwords are the same");
	}
	else
	{
		confirm("No database present to store your data. Try again later");
	}
}


function search(){
	var x = document.getElementById("search").value;
	if(x == "Arduino board"){
		window.location.assign("boards.html");
	}
	else if(x == "sensors"){
		window.location.assign("sensors.html")
	}
	else if(x == "wires"){
		window.location.assign("wires.html")
	}
	else if(x == "tools"){
		window.location.assign("tools.html")
	}
	else if(x == ""){
		alert("Please enter a category to search")
	}
	else
		confirm("Item not yet included");
	
}



/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}





function increaseValue1() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue1() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}


function increaseValue2() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue2() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}

function increaseValue3() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue3() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}