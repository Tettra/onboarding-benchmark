const React = require('react');
const ReactDOM = require('react-dom');
const getParamsFromSearchURL = require('./utils/getParamsFromSearchURL');

const OnboardingBenchmark = require('./components/OnboardingBenchmark');

const params = getParamsFromSearchURL(window.location.search);

ReactDOM.render(<OnboardingBenchmark params={params} />, document.getElementById('main'));