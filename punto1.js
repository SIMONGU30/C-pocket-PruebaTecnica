const esPalindromo = (cadena) => {
    cadena = cadena.replace(/\s/g, "").toLowerCase()
    return cadena === cadena.split('').reverse().join('')
  }
  console.log(esPalindromo("reconocer"))
  console.log(esPalindromo("hola mundo"))
