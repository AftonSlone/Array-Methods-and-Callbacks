import { fifaData } from "./fifa.js";
// console.log(fifaData);

// console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
// fifaData.forEach((year) => {
//   if (year["Year"] === 2014 && year["Stage"] === "Final") {
//     console.log(year["Home Team Name"]);
//     console.log(year["Away Team Name"]);
//     console.log(year["Home Team Goals"]);
//     console.log(year["Away Team Goals"]);
//     console.log(year["Win conditions"]);
//   }
// });

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
function getFinals(data) {
  let newData = [];
  data.forEach((index) => {
    if (index["Stage"] === "Final") {
      newData.push(index);
    }
  });
  return newData;
  //   return data.filter(match => match["Stage"] === "Final");
}

// console.log(getFinals(fifaData));
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
  return callback(fifaData).map((match) => {
    return match.Year;
  });
}

console.log(getYears(getFinals));
/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(callback) {
  return callback(fifaData).map((match) => {
    if (match["Home Team Goals"] > match["Away Team Goals"]) {
      return match["Home Team Name"];
    } else {
      return match["Away Team Name"];
    }
  });
}

// console.log(getWinners(getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winners, years) {
  const winnersArr = winners(getFinals);
  const yearsArr = years(getFinals);
  const returnArr = [];

  for (let i = 0; i < winnersArr.length; i++) {
    returnArr.push(`In ${yearsArr[i]}, ${winnersArr[i]} won the world cup!`);
  }

  return returnArr;
}

console.log(getWinnersByYear(getWinners, getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */
const roundNearestHundreth = (number, arryLength) => {
  number /= arryLength;
  number *= 100;
  number = Math.round(number);
  number /= 100;
  return number;
};
function getAverageGoals(data) {
  let averageHomeTeamGolas = data.reduce((total, currentValue) => {
    return total + currentValue["Home Team Goals"];
  }, 0);
  let averageAwayTeamGoals = data.reduce((total, currentValue) => {
    return total + currentValue["Away Team Goals"];
  }, 0);
  return {
    "Average Away Team Goals": roundNearestHundreth(
      averageAwayTeamGoals,
      data.length
    ),
    "Average Home Team Goals": roundNearestHundreth(
      averageHomeTeamGolas,
      data.length
    ),
  };
}

getAverageGoals(fifaData);
console.log(getAverageGoals(fifaData));
/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

getCountryWins();

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
