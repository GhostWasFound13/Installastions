module.exports = async (d) => {
    const data = d.util.aoiFunc(d); //fetchInvite[czCgVfh4Hu;code]
    const [inviteCode, property] = data.inside.splits;

    try {
      const response = await fetch(
        `https://discord.com/api/v10/invites/${inviteCode}?with_counts=true&with_expiration=true`
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const inviteData = await response.json();

      const properties = property.split('.');
      let result = inviteData;
      for (const prop of properties) {
        if (result && result.hasOwnProperty(prop)) {
          result = result[prop];
        } else {
          return d.aoiError.fnError(d, 'custom', {}, 'property');
        }
      }

      data.result = result;

      return {
        code: d.util.setCode(data),
      };
    } catch (error) {
      console.error(error);
      return d.aoiError.fnError(d, 'custom', {}, 'invite');
    }
  },
});
