import { Personagem } from "./personagem.js";


export class Arqueiro extends Personagem {

    // atributos
    inteligencia
    destreza

    // atributos estaticos
    static descricao = 'Você tem o meu arco!'
    static tipo ='Arqueiro'

    // constructor
    constructor(nome,inteligencia,destreza){
        //propriedades
        super(nome)
        this.inteligencia = inteligencia
        this.destreza= destreza
        
    }

    obterInsignia(){
        if(this.destreza >=5 ){
            return ` Dominador de Flechas`
        }

    
        return super.obterInsignia()
    }
}