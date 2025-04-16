const marvel_heroes = ["thor", "Ironman"]
const dc_heroes = ["thorsss", "Ironmanss"]
marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);

const allHeros = marvel_heroes.concat(dc_heroes)
console.log(allHeros);

const another_array = [1,2,3, [4,5,6] ,7, [4,5]] // array ke andar aaray

const real_ar = another_array.flat(Infinity)
console.log(real_ar);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name : "anita"})); //intresting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
