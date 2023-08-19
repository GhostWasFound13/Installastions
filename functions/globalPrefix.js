module.exports = async (d) => {
  const data = d.util.aoiFunc(d);

  data.result = d.client.prefix[0]
  return {
    code: d.util.setCode(data)
  }
}