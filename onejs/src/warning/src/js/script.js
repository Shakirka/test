var btn1 = document.getElementsByClassName("btn1");

function go() {
    
var years = document.getElementById("years").value;
 if(years < 18) {
     alert ("Вам запрещен доступ к этому сайту");
 } else if(years > 18) {
     document.location.href = "http://www.yakubovshakir.ru/site/src/js_one/src/"
 }
}