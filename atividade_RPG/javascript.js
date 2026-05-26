class Personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }
    hero_atacar(alvo, habilidade) {
        if (this.mana >= habilidade.custo
            && this.energia >= habilidade.energia) {
            alvo.hp = alvo.hp - habilidade.dano;
            
            if (habilidade.custo > 0) {
                this.mana -= habilidade.custo;
                this.energia += 50;
                
            }
            if (habilidade.energia > 0) {
                this.energia = 0;
            }
            
            else {
                return ("Mana ou Energia Insuficiente!");
            }
        }
    }
    boss_atacar(alvo) {
        if (this.energia >= 100) {
            alvo.hp = alvo.hp - 15;
            this.energia = 0;
        } else {
            this.energia += 50;
        }
    }
}
class Habilidade {
    constructor(id, nome, dano, custo, energia) {
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }
}
// Instancia Classes - Criar Objetos
let hero = new Personagem("Rune", "Mestra dos Dinossauros", 100, 100, 0);
let hero2 = new Personagem("Aurora", "Hera Venenosa", 100, 0, 50);

//Preencher Status

document.getElementById("nome-hero").textContent = hero.nome;
document.getElementById("titulo-hero").textContent = hero.titulo;

document.getElementById("nome-hero2").textContent = hero2.nome;
document.getElementById("titulo-hero2").textContent = hero2.titulo;

let containerBtn = document.getElementById("controles");
let ListaHabilidades = [
    new Habilidade(1, "🏹Ataque Básico", 4, 0, 0),
    new Habilidade(2, "🪄Skill", 8, 10, 0),
    new Habilidade(3, "🧨Supremo", 15, 0, 100)
];
console.log("ListaHabilidades");
ListaHabilidades.forEach(hab => {
    console.log(hab);
    let btn = document.createElement("button");
    btn.innerText = hab.nome;
    btn.classList.add("btn", "btn-primary");
    containerBtn.appendChild(btn);
    btn.onclick = () => {
        hero.hero_atacar(hero2, hab);
        document.getElementById("hp-hero2").value = hero2.hp;
        atualizartela()
    }
})
const atualizartela = () => {
    document.getElementById("hp-hero2").value = hero2.hp;
    document.getElementById("mana-hero2").value = hero2.mana;
    document.getElementById("energia-hero2").value = hero2.energia;

    document.getElementById("hp-hero").value = hero.hp;
    document.getElementById("mana-hero").value = hero.mana;
    document.getElementById("energia-hero").value = hero.energia;
}