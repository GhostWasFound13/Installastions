module.exports = async (d) => {
  const data = d.util.aoiFunc(d);
  const [fullStart, emptyStart, fullBar, emptyBar, fullEnd, emptyEnd, value, maxValue, size] = data.inside.splits;

let errors = []


!fullStart || fullStart == '' ? errors.push('"fullStart" - Param 1 is not provided!') : !emptyStart || emptyStart == '' ? errors.push('"emptyStart" - Param 2 is not provided!') : !fullBar || fullBar == '' ? errors.push('"fullBar" - Param 3 is not provided!') : !emptyBar || emptyBar == '' ? errors.push('"emptyBar" - Param 4 is not provided!') : !fullEnd || fullEnd == '' ? errors.push('"fullEnd" - Param 5 is not provided!') : !emptyEnd || emptyEnd == '' ? errors.push('"emptyEnd" - Param 6 is not provided!') : !size || size == '' || parseInt(size) < 10 ? errors.push('"size" cannot be less than 10 or empty') : null



console.log(errors)
if(errors.length >= 1) {
 return d.aoiError.fnError(d,"custom",{},`KeyError: ${errors}`);
} else {

let barArr = [];
let full = Math.round(size * (value / maxValue > 1 ? 1 : value / maxValue));
let empty = size - full > 0 ? size - full : 0;
for (let i = 1; i <= full; i++) barArr.push(fullBar);
for (let i = 1; i <= empty; i++) barArr.push(emptyBar);
barArr[0] = barArr[0] == fullBar ? fullStart : emptyStart;
barArr[barArr.length - 1] = barArr[barArr.length - 1] == fullBar ? fullEnd : emptyEnd;
const bar = barArr.join(``);


data.result = bar + ` ${Math.floor((value*100)/maxValue)}%`
}
    return {
      code: d.util.setCode(data),
    };

  };
