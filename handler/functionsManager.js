
const binary = require('./functions/misc/binary');
const morse = require('./functions/misc/morse');
const temperature = require('./functions/utils/temperature');
const bmi = require('./functions/misc/bmi');
const progressBar = require('./functions/utils/progressBar');
const percentage = require('./functions/math/percentage');
const minNumber = require('./functions/math/minNumber');
const maxNumber = require('./functions/math/maxNumber');
const power = require('./functions/math/power');
const squareRoot = require('./functions/math/squareRoot');

function loadManager(client) {
  const functionsToLoad = {
    binary,
    morse,
    temperature,
    bmi,
    progressBar,
    percentage,
    minNumber,
    maxNumber,
    power,
    squareRoot,
  };

  for (const functionName in functionsToLoad) {
    if (Object.hasOwnProperty.call(functionsToLoad, functionName)) {
      bot.functionManager.createFunction({
        name: "$" + functionName,
        type: "djs",
        code: functionsToLoad[functionName],
      });
    }
  }
}

module.exports = {
  loadManager,
};
