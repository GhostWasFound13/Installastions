module.exports = async (d) => {
const functionName = '$animeQuote'
const data = d.util.aoiFunc(d);
const [key=""] = data.inside.splits;

const response = await fetch('https://some-random-api.com/animu/quote');
const json = await response.json();

let output = !key ? JSON.stringify(json) : json[key];

if (!output) {
return d.aoiError.fnError(d,"custom",{},`KeyError: no "${key}" key found!`);
} 
else 
{
  data.result = output;
}

return { code: d.util.setCode(data) };
  };
