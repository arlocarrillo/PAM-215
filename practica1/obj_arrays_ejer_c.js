const personas=[
    {nombre:"Ana", edad:22},
    {nombre:"Luis", edad:35},
    {nombre:"Maria", edad:28}
];

const personaLuis = personas.find(p => p.nombre === "Luis");
console.log("Persona encontrada:", personaLuis);

const todo=personas.forEach(personas => console.log(personas));

const totalEdades = personas.reduce((acumulador, person) => acumulador + person.edad, 0);
console.log("Suma total de edades:", totalEdades);