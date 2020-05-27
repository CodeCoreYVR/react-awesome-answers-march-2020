import React, { Component } from 'react';
import QuestionDetails from '../QuestionDetails';
import AnswersList from '../AnswersList';
import oneQuestionData from '../oneQuestionData';

// If your component needs state or events... use a class based component
class QuestionShowPage extends Component {
  constructor(props) {
    super(props); // calling the constructor() method of the React.Component class.
    // call super(props) in every class component you write.
    this.state = {
      question: oneQuestionData,
      shouldHide: false
    }
  }

  hideAnswers() {
    this.setState((state) => {
      const shouldHide = state.shouldHide ? false : true;
      return {
        shouldHide: shouldHide
      }
    })
  }

  render () {
    return (
      <div id='questionShowPage'>
        <QuestionDetails
          title={this.state.question.title}
          body={this.state.question.body}
          author={this.state.question.author}
          view_count={this.state.question.view_count}
          created_at={new Date(this.state.question.created_at)}
        />
        { this.state.shouldHide ? null : <AnswersList answers={this.state.question.answers}/> }
        <button onClick={() => { this.hideAnswers() }}>Toggle Answers</button>
      </div>
    )
  }
}

export default QuestionShowPage