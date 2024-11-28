// log de hello js!
console.log("Hello JS!");

/*
Apprenons à coder 
en Javascript
*/
let pikachu ={
    id: 25,
    name: "pikachu",
    wheightKG: 6.0,
    hpMax: 80,
    attacks: [
        {
            name: "Vive-Attaque",
            damages: 10,
            type: "normal",
        },
        {
            name: "Boule Elek",
            damages:10,
            type: "electrik",
        },
    ],
};

// console.log("pikachu =", pikachu);

function AttackListPokemon(pokemon){
    console.log(`${pokemon.name} possède ${pokemon.attacks.length} attaques :`);

    for(let i = 0; i < pokemon.attacks.length; i++){
        const attack = pokemon.attacks[i];

        console.log(`\t"${attack.name}" (puissance ${attack.damages}) (type ${attack.type})`);
    };
}

AttackListPokemon(pikachu);