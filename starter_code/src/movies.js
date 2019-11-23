/* eslint no-restricted-globals: 'off' */

/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
<<<<<<< HEAD
function orderByYear(array) {

    let copy = [...array];

    copy.sort((a, b) => {
        if (a.year > b.year) return 1;
        if (a.year < b.year) return -1;
        if (a.year == b.year) {
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1;
        }

    });
    return copy;
};


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
    let dramaMovies = array.filter(movie => movie.genre.includes("Drama"))
    let stevenDramaMovies = dramaMovies.filter(steven => steven.director.includes("Steven Spielberg"))
    return stevenDramaMovies.length
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
=======
function orderByYear(array){

    let copy=[...array];
    
    copy.sort((a, b) => {
        return a.year - b.year;
        })
       
      
    
      movies.sort((a, b) => {
        return a.year - b.year;
        })
       
      movies.sort(orderByYear(a, b) =>{
        if (a.year - b.year == 0) { 
            if (a.title < b.title) { 
                return -1;
            }
            if (a.title < b.title) {
                return 1;
            }
            else {
                return 0;
            }
        }
        return a.year - b.year; 
    })
    
    
  
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

// function howMnayMovies(anArray){
//     if(genre =="drama" && director == "steven speilberg"){
//         return
//     }
// }
// function howManyYears(anArray){
//     anArray.filter(check(anArray));
// }

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(array){

    let copy = [...array];
    
      copy.sort( (a, b) =>{
        if(a.title < b.title){
          return -1;
        }
        else if( b.title < a.title){
          return 1;
        }
        else {
          return 0;
        }
      })
    
      let first20 = copy.slice(0, 20) ;
    
    
    
      return first20;
    
    
    }






>>>>>>> 20af707f088507ace04ec1bf9872baba6ed738bf

    let newAr = array.map(function (movies) {
        return movies.title;
    });

    newAr.sort();
    
    return newAr.slice(0, 20);
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {

    if (array.length == 0) {
        return 0
    }


    let totalRates = array.reduce((a, c) => {

        return a + (c.rate ? c.rate : 0);


    }, 0);


    let avgRate = (totalRates / array.length).toFixed(2);

    return Number(avgRate);

}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    let dramaMovies = array.filter(function(movie) {
       if (movie.genre.indexOf('Drama') !== -1) {
           return true;
       }
       return false
    });
   
    if (dramaMovies.length == 0 ){
        return 0;
    }
   
    return (ratesAverage(dramaMovies));
   
   }
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
    const arrayCopy = array.map(item => {
      return {
        ...item,
        duration: turnTimeFunction(item.duration)
      };
    });
  
    return arrayCopy;
  }
  
  const turnTimeFunction = duration => {
    let arrayDuration = duration.split(" ");
  
    if (arrayDuration.length > 1) {
      return parseInt(arrayDuration[0]) * 60 + parseInt(arrayDuration[1]);
    } else {
      if (duration.indexOf("h") > 0) {
        return parseInt(duration) * 60;
      } else {
        return parseInt(duration);
      }
    }
  };

// BONUS Iteration: Best yearly rate average - Best yearly rate average


// BONUS Iteration: Best yearly rate average - Best yearly rate average
