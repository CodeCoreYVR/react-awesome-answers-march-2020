import React, { Component } from 'react';
import QuestionIndexPage from '../QuestionIndexPage';
import QuestionShowPage from '../QuestionShowPage';
import NewQuestionPage from '../NewQuestionPage';
import CurrentDateTime from '../CurrentDateTime';
import SignInPage from '../SignInPage';
import { User } from '../requests';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    // Session.create({
    //   email: 'js@winterfell.gov',
    //   password: 'supersecret'
    // }).then(data => {
    //   console.log(data);
    // })
    this.getUser();
  }

  getUser() {
    // 1) fire off an api request to get information about the current logged in user.
    // 2) when it gets a response update the state with the user information
    User.current().then(data => {
      console.log(data)
      this.setState((state) => {
        return {
          currentUser: data
        }
      })
    });
  }

  render() {
    return(
      <BrowserRouter>
        <main>
          <Navbar currentUser={this.state.currentUser} hello="World"/>
          {/* 
            The Route component has many props to determine which component gets rendered. and when to render a component
            - path: when the path prop mathces the path in the url, the provided component is rendered
            - component: this is the component you want to render
            - exact: prop to tell react-router-dom to only render this Route if the path is exactly "/questions" 
          */}
          {/* 
            switch is a component provided by React-Router-Dom that will only render the first <Route/> component that matches
           */}
          <Switch>
            <Route path="/questions" exact component={QuestionIndexPage} />
            <Route path="/questions/new" component={NewQuestionPage} />
            <Route path="/questions/:id" component={QuestionShowPage} />
            <Route path="/sign_in" component={SignInPage} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

export default App