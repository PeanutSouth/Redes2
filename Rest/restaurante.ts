import { chef } from "./chef";
import { plato } from "./plato";
export class restaurante {
    private platos: plato[];
    private chefs: chef[];
    private nombre :string;
  
    public constructor(platos: plato[], chefs : chef[], nombre : string) {
      this.platos = platos;
      this.chefs = chefs;
      this.nombre = nombre;
    }
  
    get Platos(): plato[] {
      return this.platos;
    }
    get Chefs(): chef[] {
        return this.chefs;
    } 
    get Nombre(): string {
        return this.nombre;
    }
    public setPlatos(platos: plato[]) {
      this.platos = platos;
    }
    public setChefs(chefs: chef[]) {
        this.chefs = chefs;
    }
    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public comprobarChef (chef : chef) :boolean {
        if (chef.Edad >= 18){
            if(chef.Experiencia != 0){
                return true;
            }
        }
        return false;
    }

    public contratarChef(chef : chef){
        if (this.comprobarChef(chef)){
            this.chefs.push(chef);
            console.log("El chef "+chef.Nombre+" se unió al equipo de "+this.nombre);
        }else{
            console.log("El chef "+chef.Nombre+" NO se unió al equipo de "+this.nombre);
        }
    }

    public comprobarPlato (plato : plato) : boolean{
        if (!this.platos.includes(plato)){
            if(this.chefs.includes(plato.Chef)){
                return true;
            }
        }
        return false;
    }  
    public agragarPlato(plato : plato){
        if (this.comprobarPlato(plato)){
            this.platos.push(plato);
            console.log("El plato "+plato.Nombre+" se agregó al menú de "+this.nombre);
        }else{
            console.log("El plato "+plato.Nombre+" NO se agregó al menú de "+this.nombre);
            
        }
    }
  }
  
