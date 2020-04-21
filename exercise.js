let quote = ["I", "am", "your", "friend"]

quote.pop();

quote.push("father");

quote.unshift("Luke");

let erroneousWord = "Luke";
let lukeIsHere;
if (quote.find(element => element == erroneousWord) == "Luke"){
    lukeIsHere = true;
}
console.log(lukeIsHere);



let lukeIsAt;
if(lukeIsHere) {
    lukeIsAt = quote.findIndex(element => element == erroneousWord);
    quote[lukeIsAt] = "No";
}
console.log(lukeIsAt);

console.log(quote);