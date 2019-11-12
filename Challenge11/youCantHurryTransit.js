/*
For this challenge, we'll implement a function called busTimes(). This function
will calculate the arrival time for a collection of busses based on their current
speed and distance from the stop. It will receive an object called buses, which
contains a series of objects for each bus, with the distance of the bus and the speed
that the bus is traveling at. Our function should return a new object that shows how
long until each bus arrives at the stop.
*/

const busTimes = buses => {
  let approxArrival = {};

  for (const bus in buses) {
    approxArrival[bus] = buses[bus].distance / buses[bus].speed;
  }

  return approxArrival;
};
