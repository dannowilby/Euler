//Multiples of 3 and 5

console.log(calcTotal());

function calc5to100(iter) {
  var total5 = 0;
  for(var i = 0; i < 100; i += 5){
    total5 += (iter + i);
  }
  return total5;
}

function calc3to100(iter) {
  var total3 = 0;
  var l = ((900 - iter)/100);
  if(l % 3 == 0) {
    for(var i = 0; i < 100; i += 3) {
      var o = iter + i;
      if(!(o % 5 == 0)) {
        total3 += o;
      }
    }
  } else {
    var s = iter + l;
    for(var i = 0; i < 100; i += 3) {
      var p = s + i;
      if(!(p % 5 == 0)) {
        total3 += p;
      }
    }
  }
    return total3;
}

function calcTotal() {
  var total = 0;

  for(var i = 0; i < 1000; i += 100) {
      total += calc5to100(i);
      total += calc3to100(i);
    }

  return total;
}
