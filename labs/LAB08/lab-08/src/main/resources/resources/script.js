window.addEventListener("load", function(){
   loadUser();
});

function loadUser(){
  var email = getParameterByName('email');
  document.getElementById('message-input-email').value = email;
}
/**
Entrada:
 name=email
 url=http://localhost:8080/room?name=jcartero@vecindad.com
Salida:
 return -> jcartero@vecindad.com
*/
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


