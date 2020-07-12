function submitletter()
{
window.location.reload();
}


var next2=0; var next = 0;
function f(text)
{var len = text.length;
  var array = text.split("");
  var i = 0;
  var x = setInterval(function()
             {   document.getElementById("text").innerHTML += array[i];
    i = i + 1;
  if(i==len) {clearInterval(x); next++;} },150);}
function g(text)
{var j = text.length - 1;
  var array2 = text.split("");
  var y = setInterval(function()
{document.getElementById("text").innerHTML = document.getElementById("text").innerHTML.slice(0,-1);
    j = j - 1;
  if(j==-1) {clearInterval(y); next++;} },150);}

function videoplugin()
{

  width = window.innerWidth;
if(width<420)
{ console.log('width is lesser');
console.log(document.getElementById('cdr-home').width);
document.getElementById('cdr-home').width = 224;
document.getElementById('cdr-home').height = 126;
console.log(document.getElementById('cdr-home').width);
}

}

function facebookplugin()
{
  width = window.innerWidth;

if(width<=900)
{

  document.getElementById("fbplugin").src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMarsRoverManipal%2F&tabs=timeline&width=" + 280 + "&height=200&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId";

}

if(width<=769)
{
 document.getElementById("fbplugin").src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMarsRoverManipal%2F&tabs=timeline&width=" + 340 + "&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId";

}

if(width<=420)
{
 document.getElementById("fbplugin").src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMarsRoverManipal%2F&tabs=timeline&width=" + 300 + "&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId";

}

}


document.addEventListener("DOMContentLoaded", function(event) { 
setTimeout(function(){f("Welcome to La Gastronomie!");},1500);

setTimeout(function() {
  if(document.getElementById("text").innerHTML!="Welcome to La Gastronomie!")
document.getElementById("text").innerHTML = "Welcome to La Gastronomie!";
},22000);
  // body...
var i = 0;
var j = 0;
document.getElementById("urclink").addEventListener("click",openlink1);
document.getElementById("sponsorshiplink").addEventListener("click",openlink2);
function openlink1()
{var elem = document.getElementById("hovertwo");
if(i==0)
{i = 1;
elem.style.display = "block";}
else
{i = 0;
elem.style.display = "none";}
}
function openlink2()
{var elem = document.getElementById("hoverone");
if(j==0)
{j = 1;
elem.style.display = "block";}
else
{j = 0;
elem.style.display = "none";}}
document.getElementById("menubutton").addEventListener("click",slidein);
document.getElementById("close").addEventListener("click",slideout);

function slidein()
{
  document.getElementById("menu").className = "menuslidein";
}

function slideout()
{
  document.getElementById("menu").className = "menuslideout";
}
document.getElementById('newslettersubmit').addEventListener("click",submitletter);
facebookplugin();
videoplugin();
});


