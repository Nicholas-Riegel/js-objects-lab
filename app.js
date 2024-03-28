const pokemon = require('./data.js')

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}
/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game.difficulty = "Med"

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?

Answer: push()

Solve Exercise 4 here:
*/
game.party.push(pokemon[0])

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?

Answer: push()

Solve Exercise 5 here:
*/

game.party.push(pokemon[30], pokemon[32], pokemon[33])

/*
Exercise 6
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?

Answer: In order to sort numbers in ascending order the sort() method with the comparison function would look as follows:

array.sort((a, b) => {
  return a - b;
}

The comparison function takes two numerical parameters (a and b) and returns an operation on them.

The rule to remember is: if the returned value is negative, a will come before b. If the returned value is positive, b will come before a.

Thus if you want the smaller number always to precede the bigger number (ascending order), the operation on a and b should be a - b.

In this case if a is greater than b, a - b will be positive, and b (the smaller number) will come first. In other words, ascending order.

If a is less than b, a - b will be negative, and a (the smaller number) will come first.

In both cases, the smaller number will come first. Ascending order.

In order to create descending order, you want the bigger number to always come first. Thus the operation should be reversed: b - a.

In this case, if a is greater than b, b - a will be negative, and a, the greater number, will come first.

If b is greater than a, b - a will be postive, and b, the greater number, will again come first.

If a and b are equal than their sort order will not change. 

This may be sort of difficult to understand, so it may be easier to memorize that a - b creates ascending order, and b - a creates asending order. 

Solve Exercise 6 here:
*/

game.party.sort((a, b)=>{
  return b.hp - a.hp;
})

/*
Exercise 7
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 7 here:
*/

game.gyms.forEach(x => {
  if (x.difficulty < 3){
    x.completed = true
  }
})


/*
Exercise 8
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu
  
  More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. Remember that you're working with an array of objects - what array method is ideal for replacing one element with another? 
  
  Answer splice()

  Solve Exercise 8 here:
  */

game.party.splice(3, 1, pokemon[1])

/*
Exercise 9
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 9 here:
*/

// game.party.forEach(x => {
//   console.log(x.name)
// })

/*
Exercise 10
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 10 here:
*/
// pokemon.forEach(x => {
//   if (x.starter = true){
//     console.log(x.name)
//   }
// })

/*
Exercise 11
1. Add a method called `catchPokemon` to the `game` object. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 11 here:
*/

game.catchPokemon = (pokemonObj = {}) => {
  game.party.push(pokemonObj)
}

game.catchPokemon(pokemon[52])

/*
Exercise 12
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Answer: just add 'game.items[1].quantity--' to the function

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 12 here:
*/

game.catchPokemon = (pokemonObj = {}) => {
  game.party.push(pokemonObj)
  game.items[1].quantity--
}

game.catchPokemon(pokemon[54])

/*
Exercise 13
1. Similar to Exercise 7, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).
Answer: just as in exercise 2

Solve Exercise 13 here:
*/

game.gyms.forEach(x => {
  if (x.difficulty < 6){
    x.completed = true
  }
})

/*
Exercise 14
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 14 here:
*/

game.gymStatus = () => {
  const gymTally = {completed: 0, incomplete: 0}
  game.gyms.forEach(x => {
    if (x.completed === true){
      gymTally.completed++
    } else {
      gymTally.incomplete++
    }
  })
  console.log(gymTally)
}

// game.gymStatus()


/*
Exercise 15
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 15 here:
*/

game.partyCount = () => {
  return game.party.length;
}

// console.log(game.party)
// console.log(game.partyCount())

/*
Exercise 16
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).
It seems the same. Just changing the 6 to an 8

Solve Exercise 16 here:
*/
game.gyms.forEach(x => {
  if (x.difficulty < 8){
    x.completed = true
  }
})

/*
Exercise 17
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 17 here:
*/


console.log(game)
// console.dir(pokemon, { maxArrayLength: null })
