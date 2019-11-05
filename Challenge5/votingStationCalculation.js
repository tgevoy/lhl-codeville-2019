/*
Complete the function chooseStations(stations) that takes in an array of possible
voting stations, and then only returns the names of the stations that are appropriate.

Your function will receive an array of stations, where each station itself is an array
with a name, a capacity, and a venue type.

In order for a station to be deemed appropriate, it must have a capacity of at least 20,
and be a school or community centre.
*/

const chooseStations = stations => {
  let approvedStations = [];

  stations.map(station => {
    let uniqueStation = [...new Set(station)];

    if (uniqueStation[1] >= 20 && uniqueStation[2] !== "restaurant") {
      approvedStations.push(uniqueStation[0]);
    }
  });

  return approvedStations;
};
