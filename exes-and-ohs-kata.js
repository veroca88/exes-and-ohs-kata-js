function XO(str) {
  var x = 0
  var o = 0
  for (var i = 0; i < str.length; i++) {
    var letter = str.toLowerCase().charAt([i])
    switch (letter) {
      case 'o':
        o = o + 1;
        break;
      case 'x':
        x = x + 1;
        break;
    }
  }
  if (x === o) {
    return true
  } else {
    return false
  }
}
