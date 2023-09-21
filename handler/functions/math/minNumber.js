function minNumber(d) {
  const data = d.util.aoiFunc(d);
  const [a, b] = data.inside.splits;

  if (isNaN(a) || isNaN(b)) {
    return d.aoiError.fnError(d, 'custom', {}, 'Invalid input. Usage: $minNumber[a;b]');
  }

  const result = Math.min(parseFloat(a), parseFloat(b));
  data.result = result;

  return {
    code: d.util.setCode(data),
  };
}

module.exports = minNumber;
