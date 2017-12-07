function sayHello(argument) {
	var date = new Date();
var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
   var day = date.getDate();
   var monthIndex = date.getMonth();
    var year = date.getFullYear();

    var print_out = day + ' ' + monthNames[monthIndex] + ' '+ year
	document.getElementById('demo').innerHTML = print_out;
}