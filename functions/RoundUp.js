module.exports = async (d) => {
  const data = d.util.aoiFunc(d);
  const [number] = data.inside.splits;

  if (isNaN(number)) {
    return d.aoiError.fnError(d, 'custom', {}, 'Invalid input. Usage: $roundUp[number]');
  }

  const result = Math.ceil(parseFloat(number));
  data.result = result;

  return {
    code: d.util.setCode(data),
  };
}
