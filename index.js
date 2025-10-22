// create a bussiness name generator by combining list of adjectives and shop name and another word
// Adjectives:
// crazy
// amazing
// fire
// Shop Name:
// Engine
// food
// Garments
// Another Word:
// Bros
// limited
// Hub
let rand=Math.random()
let first,second,third
if(rand<0.33){
    first="crazy"
}
else if(rand<0.66 && rand>=0.33){
    first="amazing"
}
else{
    first="fire"
}
rand=Math.random()
if(rand<0.33){
    second="Engine"
}
else if(rand<0.66 && rand>=0.33){
    second="food"
}
else{
    second="garments"
}
rand=Math.random()
if(rand<0.33){
    third="bros"
}
else if(rand<0.66 && rand>=0.33){
    third="limited"
}
else{
    third="hub"
}
console.log(`${first} ${second} ${third}`)