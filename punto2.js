const listaPersonas = [
    { nombre: "Simon", edad: 21 },
    { nombre: "Jeronimo", edad: 13 },
    { nombre: "Eliana", edad: 47 },
    { nombre: "German", edad: 58 },
  ]
  const personasMayoresDeEdad = (personas) => {
    return personas
      .filter(persona => persona.edad >= 18)
      .sort((a, b) => a.nombre.localeCompare(b.nombre))
  }
  console.log(personasMayoresDeEdad(listaPersonas))