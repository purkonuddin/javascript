/*
study kasus : membalik kata dengan for? ...
*/
function balik(kata) {
  var atak = [];
  for (var i = 0; i < kata.length; i++) {
    atak.push(kata[(kata.length-1)-i]);
  }

  return atak.join('');  //tanpa join()! ...???
}
console.log(balik('jawa'));
