function maxNumber(d) {
  const data = d.util.aoiFunc(d);
  const [a, b] = data.inside.splits;

  if (isNaN(a) || isNaN(b)) {
    return d.aoiError.fnError(d, 'custom', {}, 'Invalid input. Usage: $maxNumber[a;b]');
  }

  const result = Math.max(parseFloat(a), parseFloat(b));
  data.result = result;

  return {
    code: d.util.setCode(data),
  };
}

module.exports = maxNumber;
