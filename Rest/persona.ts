export class persona {
    private nombre: string;
    private fechaNac: Date;
    private dni: number;

    public constructor(nombre: string, fechaNac : Date, dni : number) {
        this.nombre = nombre;
        this.fechaNac = fechaNac;
        this.dni = dni;
    }
    get Nombre():string{
        return this.nombre;
    }
    get FechaNac():Date{
        return this.fechaNac;
    }
    get Edad(): number {
        const hoy = new Date();
        const Nac = this.fechaNac;
        let edad = hoy.getFullYear() - Nac.getFullYear();
        const m = hoy.getMonth() - Nac.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < Nac.getDate())) {
          edad--;
        }
        return edad;
    }
    public getDni():number{
        return this.dni;
    }
    public setNombre(nombre: string) {
        this.nombre = nombre;
    }
    public setFechaNac(fechaNac: Date) {
        this.fechaNac = fechaNac;
    }
    public setDni(dni: number) {
        this.dni = dni;
    }
}