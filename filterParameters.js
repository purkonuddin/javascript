function panggilFilterParameter(values) {
  var arr = [
    {negara : 'Bogor', benua : 'Jawa Barat'},
    {negara : 'Tangerang', benua : 'Banten'},
    {negara : 'Depok', benua : 'Jawa Barat'},
    {negara : 'Bekasi', benua : 'Jawa Barat'},
    {negara : 'Jakarta', benua : 'DKI Jakarta'},

  ];

  var benuaJabar = arr.filter(function (item) {
    return item.benua === values;
  });

  console.log(benuaJabar);
}

panggilFilterParameter('Banten');
