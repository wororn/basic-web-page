
var myVar = setInterval(myWatch01, 1000);

function myWatch01() {

 var d = new Date();
  
 var t = d.toLocaleTimeString();
 var j= t.substring(0,2);
 var m= t.substring(3,5);
 var s= t.substring(6,8);
 
  document.getElementById("jam").innerHTML = j;
  document.getElementById("menit").innerHTML = m;
  document.getElementById("detik").innerHTML = s;
}


