function parseTime(ms, format) {
  const units = [
    { value: 3600000, label: format === 'short' ? 'h' : ' hour' },
    { value: 60000, label: format === 'short' ? 'm' : ' minute' },
    { value: 1000, label: format === 'short' ? 's' : ' second' }
  ];

  return units
    .map(({ value, label }) => {
      const count = Math.floor(ms / value);
      ms %= value;
      return count > 0 ? `${count}${label}${count > 1 ? 's' : ''}` : '';
    })
    .filter(Boolean)
    .join(' ');
}



module.exports = {
  parseTime
};
