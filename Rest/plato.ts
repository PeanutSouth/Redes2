import { chef } from './chef';
import { tipo } from './tipo';
export class plato {
    private nombre: string;
    private descripcion: string;
    private chefAcargo : chef; //clase chef
    private precio : number;
    private tipo : tipo; //enum tipo
  
    public constructor(nombre: string, descripcion : string, chefAcargo : chef, precio : number, tipo : tipo) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.chefAcargo = chefAcargo;
        this.precio = precio;
        this.tipo = tipo;
    }
  
    get Nombre(): string {
      return this.nombre;
    }
    get Descripcion() : string {
        return this.descripcion;
    }
    get Chef() : chef {
        return this.chefAcargo;
    }
    get Precio() : number {
        return this.precio;
    }
    get Tipo() : tipo {
        return this.tipo;
    }
    public setNombre(nombre: string) {
        this.nombre = nombre;
    }
    public setDescripcion(descripcion: string) {
        this.descripcion = descripcion;
    }
    public setChef(chefAcargo: chef) {
        this.chefAcargo = chefAcargo;
    }
    public setPrecio(precio: number) {
        this.precio = precio;
    }
    public setTipo(tipo: tipo) {
        this.tipo = tipo;
    }
  }
  