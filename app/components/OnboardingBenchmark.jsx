const React = require('react');

const QUESTION_RESPONSES = require('../data/question-responses.js');

class Response extends React.Component {
    render() {
        const {question, response, body, list, percentile} = this.props.response;
        return (
            <div className="mt4">
                <h1 className="h3">
                    <span className="fuchsia">Q{this.props.index}: </span>
                    {question}
                </h1>
                <h2 className="h1 mt2 percentil-header">{percentile}<span className="h2 ml1">rd percentile</span></h2>
                <p>{body}</p>
                <ol>
                    { list.map(response => (<li>{response}</li>))}
                </ol>        
            </div>
        );
    }
}

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
                    <div className="sm-col">
                        <a href="/" className="btn py2">Survey Results</a>
                    </div>
                    <div className="sm-col-right">
                        <a href="https://tettra.co" className="btn py2">About Tettra</a>
                    </div>
                </nav>
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