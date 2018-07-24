const getParamsFromSearchURL = url => url.slice(1).split('&').reduce((params, pairs) => {
    const [key, value] = pairs.split('=');
    key && value && getValue(value) && (params[key.toLowerCase()] = getValue(value));
    return params;
}, {});

const getValue = value => {
    value = decodeURIComponent(value);
    try {
        return responseMap[value];
    } catch (e) {
        return;
    }
};

const responseMap = {
  'a': 'a',
  'b': 'b',
  'c': 'c',
  'd': 'd',
  'Less than a month': 'a',
  'Between 1-2 months': 'b',
  'Between 3-4 months': 'c',
  '4+ months': 'd',
  'Less than a week': 'a',
  'Between 1-2 weeks': 'b',
  '3+ weeks': 'c',
  'We don\'t have an official process': 'd',
  'We\'re not great at it': 'a',
  'We\'re average': 'b',
  'We\'re pretty good at it': 'c',
  'We\'re great at it': 'd',
  'Fewer than 10': 'a',
  '11-50': 'b',
  '50-100': 'c',
  '101+': 'd',
  '0-4': 'a',
  '5-10': 'b',
  '11-20': 'c',
  '21+': 'd'
};

module.exports = getParamsFromSearchURL;