/*
We need to go through the survey responses to see what your constituents would like you
to focus on over the course of your term in office. The array that you are given contains
many phrases and words pulled from a number of interviews. We only want to focus on the
following three key phrases:
  - "smart city",
  - "arts funding",
  - "transportation"

Our termTopics function needs to count how many times each of those topics was mentioned
in the surveys, and then return an array with the number of mentions in the following order:
smart city, arts funding, and then transportation.
*/

const termTopics = interviews => {
  let keyWords = ["smart city", "arts funding", "transportation"];
  let cityTotal = 0;
  let artTotal = 0;
  let transportTotal = 0;

  for (let i = 0; i < interviews.length; i++) {
    switch (interviews[i]) {
      case keyWords[0]:
        cityTotal++;
        break;
      case keyWords[1]:
        artTotal++;
        break;
      case keyWords[2]:
        transportTotal++;
        break;
    }
  }

  return [cityTotal, artTotal, transportTotal];
};
