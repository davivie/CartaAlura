import { Mago } from "./mago.js";

// importando as classes filhas
import { Arqueiro } from "./arqueiro.js";
import { Personagem } from "./personagem.js";


export class ArqueiroMago extends Personagem{

    // atributos
    ladoArqueiro
    ladoMago

    // atributos estaticos
    static descricao ='Detentor de lancas e flechas mágicas!'
    static tipo ="ArqueiroMago"

    constructor(nome,destreza,elementoMagico,levelMagico,inteligencia){
        
    // instanciando da classe Personagem
    // Todo Arqueiro mago é um personagem
        super(nome)

    // criando uma instancia de classes filhas
    // Composição, o ArqueiroMAgo tem um Arqueiro e tem um Mago
        this.ladoArqueiro = new Arqueiro(nome,destreza)
        this.ladoMago= new Mago(nome,elementoMagico,levelMagico,inteligencia)
        
    }

    obterInsignia(){

        // com nossos objetos criados em nossa clase ArqueiroMago
        //, vamos instanciar os metodos das outras classes filhas
        // aplicando polimorfismo
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
        
    }

}