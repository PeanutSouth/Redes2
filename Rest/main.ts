import { chef } from "./chef";
import { plato } from "./plato";
import { restaurante } from "./restaurante";
import { tipo } from "./tipo";

let tipo1 = tipo.Entrada;
let tipo2 = tipo.PlatoPrincipal;
let tipo3 = tipo.Postre;

let chef1 = new chef(5, "Juan", new Date("1998-11-23"), 12345678);
let chef2 = new chef(1, "Pedro", new Date("2000-11-23"), 87654321);
let chef3 = new chef(1, "Maria", new Date("1999-11-23"), 12348765);
let chef4 = new chef(1, "Jose", new Date("2020-11-23"), 87651234);
let chef5 = new chef(0, "Lucia", new Date("2001-11-23"), 12345687);

let plato1 = new plato("Milanesa", "Con papas fritas", chef1, 250, tipo1);
let plato2 = new plato("Ensalada", "Con pollo", chef2, 200, tipo2);
let plato3 = new plato("Pasta", "Con salsa", chef3, 300, tipo1);
let plato4 = new plato("Helado", "De chocolate", chef4, 150, tipo3);

let rest1 = new restaurante([plato1, plato2], [chef1, chef2], "El Buen Sabor");


rest1.contratarChef(chef3);
rest1.contratarChef(chef4);
rest1.contratarChef(chef5);


rest1.agragarPlato(plato3);
rest1.agragarPlato(plato4);

