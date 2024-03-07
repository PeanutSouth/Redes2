import { persona } from './persona';
export class chef extends persona {

    private experiencia: number;
  
    public constructor(experiencia : number, nombre: string, fechaNac : Date, dni : number) {
        super(nombre, fechaNac, dni);
        this.experiencia = experiencia;
    }
    get Experiencia() : number {
        return this.experiencia;
    }
    public setExperiencia(experiencia: number) {
        this.experiencia = experiencia;
    }
  }
  