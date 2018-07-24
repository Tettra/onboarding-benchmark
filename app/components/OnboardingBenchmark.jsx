const React = require('react');
const ReactShare = require('react-share');

const {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
} = ReactShare;

const QUESTION_RESPONSES = require('../data/question-responses.js');

const URL = window.location.href;
const FACEBOOK_URL = `${URL}&utm_medium=Social&utm_campaign=onboarding-benchmark&utm_source=Facebook`;
const TWITTER_URL = `${URL}&utm_medium=Social&utm_campaign=onboarding-benchmark&utm_source=Twitter`;
const EMAIL_URL = `${URL}&utm_medium=Social&utm_campaign=onboarding-benchmark&utm_source=Email`;
const LINKEDIN_URL = `${URL}&utm_medium=Social&utm_campaign=onboarding-benchmark&utm_source=LinkedIn`;

class Response extends React.Component {
    render() {
        const {question, response, body, list, percentile} = this.props.response;
        return (
            <div className="mt4">
                <h1 className="h3">
                    <span className="fuchsia">Q{this.props.index}: </span>
                    {question}
                </h1>
                <div className="mt2 mb2 italic">You answered: <b>{response}</b></div>
                {percentile && <h2 className="h1 mt2 percentil-header">{percentile}</h2>}
                <p>{body}</p>
                <ol>
                    { list && list.map(response => (<li>{response}</li>))}
                </ol>        
            </div>
        );
    }
}

const ShareButtons = () => (
  <div className="fixed social-tools">
    <FacebookShareButton
      url={FACEBOOK_URL}
      quote={"Checkout my Onboarding Benchmark Results"}
      hashtag={"#onboardingbenchmark"}
    >
      <FacebookIcon size={32} round={false} />
    </FacebookShareButton>
    <TwitterShareButton
      url={TWITTER_URL}
      title={"Checkout my Onboarding Benchmark Results"}
      via={"@teamtettra"}
      hashtags={['onboardingbenchmark']}
    >
      <TwitterIcon size={32} round={false} />
    </TwitterShareButton>
    <EmailShareButton
      url={EMAIL_URL}
      subject={"Checkout my Onboarding Benchmark Results"}
      body={`Hey checkout my results from the Onboarding Benchmark ${EMAIL_URL}`}
    >
      <EmailIcon size={32} round={false} />
    </EmailShareButton>
    <LinkedinShareButton
      url={LINKEDIN_URL}
      title={"Checkout my Onboarding Benchmark Results"}
    >
      <LinkedinIcon size={32} round={false} />
    </LinkedinShareButton>
  </div>
);

class OnboardingBenchmark extends React.Component {
    render() {
        const params = this.props.params;
        const responses = Object.keys(params).map((key, index) => {
            const q = params[key];
            const response = QUESTION_RESPONSES[key][q];
            return (<Response response={response} index={index+1} />);
        });
        if (Object.keys(params).length === 0) {
          return (
            <section className="container">
              <h1>Please take our onboarding survey!</h1>
              <p><a href="https://www.surveymonkey.com/r/DNJJFLC" className="h2">Onboarding survey</a></p>
            </section>
          );
        }
        return (
            <div>
                <nav className="fixed clearfix white bg-fuchsia col-12">
                    <div className="sm-col">
                        <img className="logo" src="https://cdn.glitch.com/6588732f-6dd0-4cb9-a80e-7bd437e3b583%2Ftettra-primary-mark-aqua.png?1532457021637"></img>
                        <a href="/" className="btn py2 px1">Onboarding Survey Results</a>
                    </div>
                    <div className="sm-col-right">
                        <a href="https://tettra.co?utm_medium=Referral&utm_campaign=onboarding-benchmark&utm_source=Onboarding-Benchmark-Site" className="btn py2">About Tettra</a>
                    </div>
                </nav>
                <ShareButtons />
                <section className="container clearfix py4">
                    <div className="sm-col-8 mx-auto mb4">
                        { responses }
                    </div>
                </section>
            </div>
        );
    }
}

module.exports = OnboardingBenchmark;