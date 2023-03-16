const circleArea = (r) => {
  return Math.pow(r, 2) * Math.PI;
};

const circleCircumference = (r) => {
  return 2 * r * Math.PI;
};

module.exports = { circleArea, circleCircumference };
