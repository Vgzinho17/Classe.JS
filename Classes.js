class Heroi {
    nome;
    idade;
    tipo;
    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}
const hero1 = new Heroi();
hero1.nome = "Gandalf";
hero1.idade = 100;
hero1.tipo = "mago";
hero1.atacar();

const hero2 = new Heroi();
hero2.nome = "Conan";
hero2.idade = 30;
hero2.tipo = "guerreiro";
hero2.atacar();

const hero3 = new Heroi();
hero3.nome = "Li";
hero3.idade = 25;
hero3.tipo = "monge";
hero3.atacar();

const hero4 = new Heroi();
hero4.nome = "Shadow";
hero4.idade = 22;
hero4.tipo = "ninja";
hero4.atacar();
