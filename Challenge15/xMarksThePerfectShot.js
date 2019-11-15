/*
For this challenge you'll have to implement a function called finalPosition(),
which will calculate the position of the parade based on an array of directional moves.
The parade will move on an X-Y grid.

Your function will receive an array of moves, which are strings that say either north,
south, west, or east, these represent the parade moving in a particular direction by a
single space on the grid. By looking at the path that the parade moves in, your function
should calculate and then return an array representing the position of the parade after
completing all of the moves. The first element of the array should be the X position, and
the second element of the array should be the Y position. The parade begins at [0,0].
*/

const finalPosition = moves => {
  let startCoord = [0, 0];
  let northCoord = 0;
  let eastCoord = 0;
  let southCoord = 0;
  let westCoord = 0;

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "north") {
      northCoord += 1;
      startCoord.splice(startCoord[1], 1, northCoord + southCoord);
    } else if (moves[i] === "east") {
      eastCoord += 1;
      startCoord.splice(startCoord[0], 1, eastCoord - westCoord);
    } else if (moves[i] === "south") {
      southCoord -= 1;
      startCoord.splice(startCoord[1], 1, southCoord - northCoord);
    } else {
      westCoord -= 1;
      startCoord.splice(startCoord[0], 1, westCoord + eastCoord);
    }
  }

  let xVals = westCoord + eastCoord;
  let yVals = northCoord + southCoord;
  let endCoord = [xVals, yVals];

  return endCoord;
};
