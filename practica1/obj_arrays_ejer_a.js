const persona={
    nombre:"Arlo Carrillo",
    edad:20,
    direccion:{
        ciudad:"Qro.",
        pais:"México"
    }
};

const{nombre,edad,direccion}=persona;
console.log("Me llamo "+nombre+", tengo "+edad+" años y vivo en "+direccion.ciudad);