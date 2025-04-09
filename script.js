class Heroi{
    constructor(nome,idade,tipo){
        this.nome =nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque;

        if(this.tipo ==="Mago"){
            ataque = "Magia";
        }

        else if(this.tipo ==="Guerreiro"){
            ataque = "Espada";
        }

        else if (this.tipo ==="Monge"){
            ataque="Artes marciais";
        }

        else if (this.tipo ==="ninja"){
            ataque = "shuriken";
        }

        else{
            ataque = "um ataque indefinido";
        }
        
        console.log(`O ${this.tipo} atacou usando ${ataque} `);
 
 
    }
}

let listaHeroi = [
    {nome: "Arthas", idade: 30,tipo: "Guerreiro"}, 
    {nome: "Merlin", idade: 412,tipo: "Mago"},
    {nome: "Lee", idade: 40,tipo: "Monge"},
    {nome: "Hanzo", idade: 28,tipo: "Ninja"},
]

for(let i=0;i<listaHeroi.length; i++){
    const{nome,idade,tipo} = listaHeroi[i];
    const heroi = new Heroi (nome,idade,tipo);
    heroi.atacar();
}