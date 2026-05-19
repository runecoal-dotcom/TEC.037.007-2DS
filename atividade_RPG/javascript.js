class Personagem {
    constructor(nome, titulo, hp, mana,energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }
}
class Habilidade {
    constructor(id,nome, dano, custo, energia) {
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
document.getElementById("hp-hero").value = hero.hp;
document.getElementById("mana-hero").value = hero.mana;
document.getElementById("energia-hero").value = hero.energia;

document.getElementById("nome-hero2").textContent = hero2.nome;
document.getElementById("titulo-hero2").textContent = hero2.titulo;
document.getElementById("hp-hero2").value = hero2.hp;
document.getElementById("mana-hero2").value = hero2.mana;
document.getElementById("energia-hero2").value = hero2.energia;

let habilidadesHero = [
    new Habilidade(1, "Ataque Básico", 10, 0, 0),
    new Habilidade(2, "Ataque Especial", 25, 20, 10),
    new Habilidade(3, "Ataque Supremo", 50, 50, 25)
];