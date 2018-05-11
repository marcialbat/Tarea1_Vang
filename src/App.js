import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi i am a react App</h1>

        <p>this really is working</p>

        <Person name="Marcial" age="22">
          {' '}
          My Hobbies: Programming{' '}
        </Person>
        <Person name="Jose" age="30" />
        <Person name="Pam" age="22" />
      </div>
    );

    // return React.createElement('div', null, React.createElement('h1', null, 'Does it work now!'));
  }
}

export default App;
