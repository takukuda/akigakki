function bmi(){
   var x = document.getElementById('shintyou').value;
   var y = document.getElementById('taiju').value;
   if ((Number(y)/(Number(x)*Number(x)))<18.5) {alert (Number(y)/(Number(x)*Number(x))) + 'kg/m²'+' 低体重'}
   else if((Number(y)/(Number(x)*Number(x)))<25) {alert(Number(y)/(Number(x)*Number(x))) + 'kg/m²'+' 普通'}
   else {alert(Number(y)/(Number(x)*Number(x))) + 'kg/m²'+' 肥満'}
  
