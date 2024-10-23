import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"


const guerreiroJose = new Guerreiro('Jose',5,5)
const magoAntonio = new Mago('Antonio',5,"Gelo",5,6)
const magaJulia = new Mago('Julia',6,'Fogo',6,5)
const arqueiroJoao= new Arqueiro('Joao',7,5,8)
const arqueiroMagoChico = new ArqueiroMago ('Chico',5,5,'Ar',5,6)


const personagens = [,guerreiroJose,magaJulia, magoAntonio,arqueiroJoao,arqueiroMagoChico]
new PersonagemView(personagens).render()

console.log(guerreiroJose)


