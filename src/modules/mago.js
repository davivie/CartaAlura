import { Personagem } from "./personagem.js";

// com o extends ,  podemos utilizar 
// os atributos da classe Personagem

export class Mago extends Personagem{
    
    elementoMagico
    inteligencia
    levelMagico
    static descricao ='O mago é implacável!'
    static tipo = "Mago"
    
    constructor(nome,elementoMagico,levelMagico,inteligencia ){
        
// selecionamos com o super os valores 
// eles serão enviados para a classe pai
        super(nome)
        this.elementoMagico = elementoMagico;
        this.levelMagico= levelMagico
        this.inteligencia = inteligencia
      

    }

    obterInsignia(){
        if(this.levelMagico>= 5 && this.inteligencia>=5){
            return `Mestre do elemento ${this.elementoMagico}`
        }

            return super.obterInsignia()
    }
}