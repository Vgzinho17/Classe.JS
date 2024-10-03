class Heroi {
    name;
    age;
    type;
    attack() {
        let attack;
        switch (this.type) {
            case 'mago':
                attack = 'magia';
                break;
            case 'guerreiro':
                attack = 'espada';
                break;
            case 'monge':
                attack = 'artes marciais';
                break;
            case 'ninja':
                attack = 'shuriken';
                break;
            default:
                attack = 'ataque desconhecido';
        }
        console.log(`o ${this.type} atacou usando ${attack}`);
    }
}
const hero1 = new Heroi();
hero1.name = "Gandalf";
hero1.age = 100;
hero1.type = "mago";
hero1.attack();

const hero2 = new Heroi();
hero2.name = "Conan";
hero2.age = 30;
hero2.type = "guerreiro";
hero2.attack();

const hero3 = new Heroi();
hero3.name = "Li";
hero3.age = 25;
hero3.type = "monge";
hero3.attack();

const hero4 = new Heroi();
hero4.name = "Shadow";
hero4.age = 22;
hero4.type = "ninja";
hero4.attack();

