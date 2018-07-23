const getParamsFromSearchURL = url => url.slice(1).split('&').reduce((params, pairs) => {
    const [key, value] = pairs.split('=');
    key && value && (params[key] = getValue(value));
    return params;
}, {});

const getValue = value => {
    value = decodeURIComponent(value);
    try {
        return JSON.parse(value);
    } catch (e) {
        return value;
    }
};

module.exports = getParamsFromSearchURL;