export class Usuario {
    constructor(id, nombre, fechaCreacion ) {
        this.id = id;
        this.nombre = nombre;
        this.fechaCreacion = fechaCreacion || new Date().toISOString();
    }

    static validar(nombre){
        if(!nombre || nombre.trim().length === 0){
            throw new Error("El nombre del usuario es obligatorio");
        }
        if (nombre.length > 50){
            throw new Error("El nombre del usuario no puede exceder los 50 caracteres");
        }
        return true;
    }
}