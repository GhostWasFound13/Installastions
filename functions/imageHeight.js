const axios = require('axios')
const sharp = require('sharp')
module.exports = async (d) => {
    data = d.util.aoiFunc(d);
    const [url] = data.inside.splits

    if (!url) return d.aoiError.fnError(d, 'custom', {}, `Invalid URL at ${url}`);
    
    try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });

      if (response.headers['content-type'] !== 'image/jpeg' && response.headers['content-type'] !== 'image/png') {
        return d.aoiError.fnError(d, 'custom', {}, 'Not a valid image URL.');
      }

      const metadata = await sharp(response.data).metadata();

      data.result = metadata.height;
    } catch (error) {
      return d.aoiError.fnError(d, 'custom', {}, 'Not a valid image URL.');
    }
    return {
        code: d.util.setCode(data)
    }
}
