/*
Our first function, bestOdds(), will receive two parameters. The first parameter
will be an array of strings that are either red, green, or blue, representing the
tickets that a particular person has. The second parameter is an object that shows how
many entries there currently are for each raffle. By looking at the tickets that the
particular person has, your function should return a string that lets the person know
which raffle they have the highest chance of winning. The format of the response should
be as follows (without the square brackets): "You have the best odds of winning the [COLOUR]
raffle."

While we could do this all within the bestOdds() function, we want to keep our code DRY,
so we will also need to complete a helper function. This helper function countTickets()
will be called from within bestOdds() and receive the array of strings that are either
red, green, or blue. The function will count how many of each string there are, and then
return an object with the individual counts.
*/

const countTickets = tickets => {
  let colorTotals = {
    red: 0,
    green: 0,
    blue: 0,
  };

  for (const ticket of tickets) {
    if (ticket === "red") {
      colorTotals.red++;
    } else if (ticket === "green") {
      colorTotals.green++;
    } else {
      colorTotals.blue++;
    }
  }

  return colorTotals;
};

const bestOdds = (tickets, raffleEntries) => {
  let updatedColorQtys = countTickets(tickets);

  let redWinPct = updatedColorQtys.red / raffleEntries.red;
  let greenWinPct = updatedColorQtys.green / raffleEntries.green;
  let blueWinPct = updatedColorQtys.blue / raffleEntries.blue;

  if (redWinPct > greenWinPct && redWinPct > blueWinPct) {
    return "You have the best odds of winning the red raffle.";
  } else if (greenWinPct > redWinPct && greenWinPct > blueWinPct) {
    return "You have the best odds of winning the green raffle.";
  }
  return "You have the best odds of winning the blue raffle.";
};
