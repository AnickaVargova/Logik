export const createSecretOptions = (options) => {
  const resultArr = [];
  const getRandomIndex = () => Math.round(Math.random() * (options.length - 1));
  while (resultArr.length < 4) {
    const randomColor = options[getRandomIndex()];
    if (!resultArr.includes(randomColor)) {
      resultArr.push(randomColor);
    }
  }
  return resultArr;
};

export const getCorrectColorsCount = (selected, secret) =>
  selected.reduce(
    (count, current) => (secret.includes(current) ? ++count : count),
    0
  );

export const getCorrectPlacesCount = (selected, secret) =>
  selected.reduce(
    (count, current) =>
      selected.indexOf(current) === secret.indexOf(current) ? ++count : count,
    0
  );

export const getEvaluation = (placesCount, selected, secret) => ({
  evalArray: Array.from({ length: placesCount }).map((item, index) => {
    if (getCorrectPlacesCount(selected, secret) > index) {
      return "black";
    }
    if (getCorrectColorsCount(selected, secret) > index) {
      return "grey";
    }
    return "";
  }),
  isGameOver: getCorrectPlacesCount(selected, secret) === 4
});

export const areColorsUnique = (colors) => {
  const colorsCopy = [];
  for (let i of colors) {
      if(!colorsCopy.includes(i)){
          colorsCopy.push(i);
      }
      else{
          return false;
      }
  }
  return true;
};

