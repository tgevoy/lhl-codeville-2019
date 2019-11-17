/*
For this challenge, we'll need to implement a function called judgeVegetable(),
that will decide which vegetable is best based on a given judging characteristic.
Our function will receive two parameters: a list of veggies(as an array of objects),
and a characteristic to judge the veggies by (in the case of a tomato, either redness
or plumpness).

Our function must return the name of the person who submitted (vegetables.submitter)
the vegetable with the highest ranking in the provided category.
*/

const judgeVegetable = (vegetables, metric) => {
  return vegetables.reduce((leader, contender) =>
    leader[metric] > contender[metric] ? leader : contender,
  ).submitter;
};
