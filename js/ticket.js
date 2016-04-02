//Code Your Solution Here
var ticket_template = "Joe Shmoe flying on Fancy Airlines Flight Number 000 arriving at Fancy Destination at 2400 hours. The flight will depart from gate 100.";

var right_ticket_template = ticket_template.replace("Joe Shmoe", "Bessie Baker").replace("Fancy Airlines Flight", "Delta").replace("000","939").replace("Fancy Destination", "Atlanta").replace("2400 hours", "8pm").replace("100", "B10");

alert(right_ticket_template);



