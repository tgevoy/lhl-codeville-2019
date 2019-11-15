/*
We'll be implementing a function called dynamicPricing(), which will return the
cost of a particular trip given the number of people on the bus, and the distance
traveled by the passenger. This function receives two numbers: numberOfPeople and
distanceTraveled.

The base ticket price is $1. Passengers will be charged $0.25 per kilometer. If there
are 30 or more people on the bus, there should be $0.25 added to the total.

The value that your functions returns must be a string, formatted as such: $4.25. Your
values must be shown to two decimal points of precision.
*/

const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  let baseFee = 1.0;
  let perKmFee = 0.25;
  let totalFee = 0.0;

  if (numberOfPeople >= 30) {
    totalFee += baseFee + distanceTraveled * perKmFee + perKmFee;
  } else {
    totalFee += baseFee + distanceTraveled * perKmFee;
  }

  let personTotal = totalFee.toFixed(2);

  return "$" + personTotal;
};
