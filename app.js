//part 1

// function favMovie(movie = "the Room", name = "Tommy Wiseau"){
//     console.log(`my name is ${name} and my favorite movie is ${movie}!`);
// }
// favMovie("Scott Pilgrim");
// favMovie("Scott Pilgrim", "Scott Pilgrim");
// favMovie();


//part 2
let favMovie = (name= "Tommy Wiseau", movie= "The Room") => console.log(`my name is ${name} and my favorite movie is ${movie}!`);
favMovie();
let getFirstName = name => {
    const words = name.split(" ");
    console.log(words[0]);
}
let getFirstNameConcise = name => {const words = name.split(" "); console.log(words[0])};
getFirstName("Michael Richardson");
getFirstNameConcise("Michael Richardson");
let doMath = (a,b) => ({
    exponent: Math.pow(a,b),     //(a^b),
    product: a*b
})
let result = doMath(2,5);
console.log(`the exponent is ${result.exponent} and the product is ${result.product}!`);

//part 3
function threeThings(name,location,favFood){
    console.log(`hi, im ${name} and I live in ${location} and I enjoy ${favFood}`);
}
let arr = ["Michael", "Birmingham", "Spaghetti"];
threeThings(...arr);
let vari = "Michael";
function poptart(name){
    let chars = [...name];
    for(i=0;i<chars.length;i++){
        console.log(`${chars[i]}`);
    }
}
poptart(vari);
