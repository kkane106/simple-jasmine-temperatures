var celsToFahr = function(cels) {
  if (typeof cels != 'number') {
    return 'the input was invalid';
  }
  
  var fahr = cels * (9/5) + 32;

  return fahr;
}