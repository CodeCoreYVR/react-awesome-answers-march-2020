import React, { Component } from "react";
import { Question } from "../requests";
import { Link } from "react-router-dom";

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      helloWorld: "helloWorld",
    };
    this.createQuestion = this.createQuestion.bind(this);
  }

  componentDidMount() {
    Question.index().then((questions) => {
      this.setState((state) => {
        return {
          questions,
          // questions: questions
        };
      });
      console.log(questions);
    });
  }

  createQuestion(params) {
    // params looks like { title: 'something', body: 'something }
    this.setState((state) => {
      return {
        question: [
          {
            ...params, // copies title: 'something', body: 'somehting
            // title: params.title,
            // body: params.body
            id: 50000,
            created_at: new Date(),
            view_count: 0,
          },
          ...state.question,
        ],
      };
    });
  }

  // the render method relies on this.state to create views
  render() {
    console.log(this);
    const { questions } = this.state;
    return (
      <main className="Page">
        <h1 className="ui horizontal divider">Question Index page</h1>
        <ul className="ui list">
          {questions.map((question) => (
            <div key={question.id} className="ui clearing segment">
              <h3 className="ui header">
                <Link to={`/questions/${question.id}`}>{question.title}</Link>
              </h3>
            </div>
          ))}
        </ul>
      </main>
    );
  }
}

export default QuestionIndexPage;
