import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem {

    inteligencia
    forca

    // atributos estaticos
    static descricao = 'Voce será esmagado pela fúria do Guerreiro'
    static tipo ='Guerreiro'

    // constructor
    constructor(nome,inteligencia,forca){
        //propriedades
        super(nome)
        this.inteligencia = inteligencia
        this.forca= forca
        

    }

    obterInsignia(){
        // acessando o level diretamente
        
        if(this.forca >=5 && this.level >=7 ){
            return ` Guerreiro Furioso`
        }

        return super.obterInsignia()
    }
}

