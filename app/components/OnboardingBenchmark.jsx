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

class Response extends React.Component {
    render() {
        const {question, response, body, list, percentile} = this.props.response;
        return (
            <div className="mt4">
                <h1 className="h3">
                    <span className="fuchsia">Q{this.props.index}: </span>
                    {question}
                </h1>
                <div className="mt2 mb2">You answered: <b>{response}</b></div>
                {percentile && <h2 className="h1 mt2 percentil-header center">{percentile}</h2>}
                <p>{body}</p>
                <ol>
                    { list && list.map(response => (<li>{response}</li>))}
                </ol>        
            </div>
        );
    }
}

const ShareButtons = () => (
  <div>
    <FacebookShareButton url={URL}>
      <FacebookIcon size={32} round={false} />
    </FacebookShareButton>
    <TwitterShareButton url={URL}>
      <TwitterIcon size={32} round={false} />
    </TwitterShareButton>
    <EmailShareButton url={URL}>
      <EmailIcon size={32} round={false} />
    </EmailShareButton>
    <LinkedinShareButton url={URL}>
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
              <div>Please take survey</div>
              <a href="https://www.surveymonkey.com/r/DNJJFLC" className="h2">
                Onboarding survey
              </a>
            </section>
          );
        }
        return (
            <div>
                <nav className="clearfix white bg-fuchsia">
                  <FacebookShareButton url={URL} />
                    <div className="sm-col">
                        <a href="/" className="btn py2">Survey Results</a>
                    </div>
                    <div className="sm-col-right">
                        <a href="https://tettra.co" className="btn py2">About Tettra</a>
                    </div>
                </nav>
                <ShareButtons />
                <section className="container">
                    <div className="sm-col-8 mx-auto mb4">
                        { responses }
                    </div>
                </section>
            </div>
        );
    }
}

module.exports = OnboardingBenchmark;