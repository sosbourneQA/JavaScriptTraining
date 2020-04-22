const movies = [{

    "title": "Jaws",

    "director": "Steven Spielberg",

    "year": "1975"

},

{

    "title": "Star Wars",

    "director": "George Lucas",

    "year": "1977"

},

{

    "title": "Avengers: Infinity War",

    "director": "Anthony and Joe Russo",

    "year": "2018"

},

{

    "title": "Top Gun",

    "director": "Tony Scott",

    "year": "1986"

},

{

    "title": "Justice League",

    "director": "Zack Snyder",

    "year": "2017"

}

];

// Don’t edit the code above this comment

// console.log(movies);


// Part 1;



// 1.

// function findMovie(movie) {

// // 2. a)i) ii)
// //    b)
// // 3.
// // 4.
// // 5.


// for (const movie of movies) {
//     if (movie.title === movie) {
//         console.log("the movies are the same!");
//         console.log(movie);
//     }
// }


    
// }

// findMovie("Star Wars");

// 6.
// console.log(movie); - outside of scope so 'movie' cannot be called

//  7.

// let movie = "Thor: Ragnorok";

// console.log(movie);






// Part 2;


// 1.
function returnMovie(movieTitle) {
    // 2. a)
    for(const movie of movies) {
        console.log(movie);
        if (movie.title == movieTitle) {
            return movie;
            console.log(movie);
            
        }
        
        // 2. b)
        // console.log('any text');

        // 8. 
        return "movie not found";
    }
}

// 3.
// let myMovie = returnMovie("Avengers"); 

// 4.
// console.log(myMovie);

// 6.
let myOtherMovie = returnMovie("Thor: Ragnorok");

// 7.
console.log(myOtherMovie); 

// 10.
fucntion myMovieDetails(anyMovie) {

    // 11.
    if(typeof anyMovie === 'object') {
        return "movie is object"
    } else {
        return anyMovie;
    }
}

// 12.
console.log(myMovieDetails(myOtherMovie));

