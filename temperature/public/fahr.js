var fahrToCels = function(fahr) {
  if (typeof fahr != 'number') {
    return 'the input was invalid';
  }
  
  var cels = (fahr - 32) * (5/9);

  return cels;
}