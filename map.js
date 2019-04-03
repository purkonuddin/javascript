function tampilkanPerintahMap()
{
  var data = ['jakarta','bogor','bekasi'];
  data.map(function(item,index,array){
    console.log(item);
    console.log(index);
    console.log(array);
  });
}

tampilkanPerintahMap();
