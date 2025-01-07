function bmi(){
   var x = document.getElementById('shintyou').value;
   var y = document.getElementById('taiju').value;
   if ((Number(y)/(Number(x)*Number(x)))<18.5) {alert '低体重'+(Number(y)/(Number(x)*Number(x))) + 'kg/m²'}
   else if((Number(y)/(Number(x)*Number(x)))<25) {alert(Number(y)/(Number(x)*Number(x))) + 'kg/m²'+' 普通'}
   else {alert(Number(y)/(Number(x)*Number(x))) + 'kg/m²'+' 肥満'}}
  
