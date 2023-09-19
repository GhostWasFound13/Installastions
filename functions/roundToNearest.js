module.exports = d => {
  const data = d.util.aoiFunc(d);
  const [number] = data.inside.splits;

  const numLength = number.length;
  const num = parseInt(number);

  if (numLength > 2) {
    const ex = Math.floor((numLength - 1) / 3);
    const div = 10 ** (ex * 3);
    const rNum = Math.round(num / div) * div;
    const rEq = rNum.toString().slice(0, - ex) + "0".repeat(ex);
    data.result = rEq;
  } else {
    data.result = num;
  };

  return {
      code: d.util.setCode(data)
  };
}