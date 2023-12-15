const marvel_heros = ["thor","ironman","spiderman"];
const dc = ["superman","flash","batman"];
// creates a problem it takes last value as array
marvel_heros.push(dc)
console.log(marvel_heros);
console.log(marvel_heros[2][3]);
const allHeros = marvel_heros.concat(dc);
console.log(allHeros);
const allnewHeros  = [...marvel_heros,...dc]
console.log(allnewHeros);

const another_array  = [1,2,3,[4,5],6,7,[8,9,[2,3]],8];
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Tarun"));
// empty object
console.log(Array.from(true));;
console.log(Array.of("grugntr"));
// special case --> empty object
console.log(Array.from({name:"Tarun"}));

let score1 = 100;
let score2  =200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));