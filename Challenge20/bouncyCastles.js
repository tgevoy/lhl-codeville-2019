/*
Each shape has a different calculation for determining volume, so we'll need to create
a few functions that will help us figure out the volume of the various inflatable attractions.

In this challenge, we'll need to implement four functions.

The first three will calculate the volume of the individual shapes:

sphereVolume()will calculate the volume of a sphere given a radius
coneVolume() will calculate the volume of a cone given a radius and a height
prismVolume() will calculate the volume of a prism given a height, a width, and a depth

The fourth function, totalVolume(), will receive an array containing the different shapes
that make up a single attraction. The totalVolume function should use the previous three
functions to calculate the total volume of an attraction.

Don't worry about getting the answers to the perfect precision: our tests will check to
see that you're within a correct range.
*/

const PI = 3.14159;

const sphereVolume = function(radius) {
  // volume = (4/3) * pie * radius^3
  return (4 / 3) * PI * Math.pow(radius, 3);
};

const coneVolume = function(radius, height) {
  // volume = pie * radius^2 * (height / 3);
  return PI * Math.pow(radius, 2) * (height / 3);
};

const prismVolume = function(height, width, depth) {
  // volume = base (i.e., area * height) * height
  return depth * width * height;
};

const totalVolume = function(solids) {
  let result = 0;

  solids.forEach(function(shape) {
    if (shape.type === "sphere") {
      result += sphereVolume(shape.radius);
    } else if (shape.type === "cone") {
      result += coneVolume(shape.radius, shape.height);
    } else {
      result += prismVolume(shape.height, shape.width, shape.depth);
    }
  });

  return result;
};
