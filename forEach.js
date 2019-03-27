function panggilForEach() {
  $data=['a','b','c'];
  $data.forEach(function(item,index,array){
    console.log(index+1 +' '+ item + ' ' +array);
  });
}
panggilForEach();
