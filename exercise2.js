// 1.

let vader = {allegiance: "Empire", weapon: "lightsabre", sith: true};
console.log(vader);

// 2.

console.log(vader.allegiance);
console.log(vader.weapon);
console.log(vader.sith);

var num_keys = Object.keys(vader);
console.log(num_keys.length);

// 3.

vader.children = 2;
vader.child_names = ["Luke", "Leia"];


// 4.

for (let key in vader) {
    console.log(`vader's ${key} is ${vader[key]}`);
}

// 5.

delete vader.children;
console.log(vader);

let {allegiance, weapon, sith, child_names} = vader;
console.log(allegiance);

vader = {}
console.log(vader);