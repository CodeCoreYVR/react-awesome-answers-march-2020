import React, { Component } from 'react';
import questionData from '../questionData';
import QuestionDetails from '../QuestionDetails';

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: questionData,
      helloWorld: 'helloWorld'
    }
  }
  
  // all functions in ReactJS should be pure functions
  // pure functions are functions that do not change anything outside of itself
  deleteQuestion() {
    console.log('question delete fired')
    // everytime you call this.setState React knows to re-render this component
    this.setState((state) => {
      // const newState = state.questions.pop()
      const questionsClone = [...state.question]
      // console.log(state);
      // const newQuestions = [...state.question] // we use the ... (spread operator) to copy the array of state.question
      questionsClone.pop()
      return {
        question: questionsClone
      }
    })
  }

  // the render method relies on this.state to create views
  render() {
    console.log(this.state)
    const questions = this.state.question.map( question => {
      return(
        <QuestionDetails
          key={question.id}
          title={question.title}
          body={question.body}
          view_count={question.view_count}
          created_at={question.created_at}
        />
      )
    })

    return (
      <main>
        <h1>Question Index page</h1>
        <ul>
          { questions }
        </ul>
        <button onClick={() => { this.deleteQuestion() }}
        >
          Delete
        </button>
      </main>
    )
  }
}

export default QuestionIndexPage