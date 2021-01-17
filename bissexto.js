function bissexto (a) {
  var a
  if ( (a % 4 == 0) && (a % 100 == 0)) {
    if (a % 400 == 0) {
      return 1
      // o ano é bissexto
    } else {
      return 0
      // o ano não é bissexto
      }
  } else {
      return 0
      // o ano não é bissexto
  }
}

var bis = bissexto(a)

// para cada ano, adicionar 365 dias + a variável bis

