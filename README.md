# **README Intro JS**

## **Intro JS**

## **Introduction**

This exercise is an introduction into JS.

## **Main function of the project**

This function is a made  to go through all the attacks of a `pokemon` and show all their info.
```js
function AttackListPokemon(pokemon){
    console.log(`${pokemon.name} possède ${pokemon.attacks.length} attaques :`);

    for(let i = 0; i < pokemon.attacks.length; i++){
        const attack = pokemon.attacks[i];

        console.log(`\t"${attack.name}" (puissance ${attack.damages}) (type ${attack.type})`);
    };
}
```
## **if you have question about the project you can contact me on my [linkedIn](https://www.linkedin.com/in/nassim-hammoudi-8a5235334/)**