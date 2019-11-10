/*
We need to write a function called whereCanIPark() that returns the coordinates of an
available parking spot for the vehicle, or returns false if there is no available spot.
Our function receives an array of arrays representing parking spots, and a string with
type of the vehicle that is looking for a parking spot.

There are three kinds of possible vehicles: regular cars, small cars, and motorcycles.
Regular cars can only park in R spots. Small cars can park in R or S spots. Motorcycles
can park in R, S, or M spots. In the array of parking spots, spots are written in both
lower-case and upper-case. An upper-case letter means that the particular spot is AVAILABLE,
while lower-case letters mean that the spot is UNAVAILABLE.

Our function must return an array with the coordinates of the spot as an [X, Y] pair.
See the example input and output below for an illustration.

Note: There may be multiple available spots for a particular vehicle. It does not matter
which spot your function chooses, as long as the spot is available. And if there are no
available spots, remember to return false.
*/

const whereCanIPark = (spots, vehicle) => {
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      const spot = spots[y][x];

      switch (vehicle) {
        case "regular":
          if (spot === "R") {
            return [x, y];
          }
          break;
        case "small":
          if (spot === "R" || spot === "S") {
            return [x, y];
          }
          break;
        case "motorcycle":
          if (spot === "R" || spot === "S" || spot === "M") {
            return [x, y];
          }
          break;
      }
    }
  }

  return false;
};
