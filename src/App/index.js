import React, { Component } from 'react';
import QuestionIndexPage from '../QuestionIndexPage';
import QuestionShowPage from '../QuestionShowPage';
import CurrentDateTime from '../CurrentDateTime';
import { Session } from '../requests';

class App extends Component {

  componentDidMount() {
    Session.create({
      email: 'js@winterfell.gov',
      password: 'supersecret'
    }).then(data => {
      console.log(data);
    })
  }

  render() {
    return(
      <main>
        <QuestionIndexPage/>
        <QuestionShowPage/>
        {/* <CurrentDateTime /> */}
      </main>
    )
  }
}

export default App