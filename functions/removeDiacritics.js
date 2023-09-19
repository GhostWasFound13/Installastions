const remove = require('diacritics').remove;
module.exports = d => {
	const data = d.util.aoiFunc(d);
	const [ text ] = data.inside.splits;
	
	data.result = keepEnye(text);
	
	function keepEnye(string) {
		const noDiacritics = string.replace(/[^ñÑ]/g, (match) => {
			return remove(match);
		});
		return noDiacritics;
	};
	
	return {
		code: d.util.setCode(data)
	}
}