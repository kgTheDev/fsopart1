import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 21

  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Keith' age={21 + 10} />
      <Hello name={name} age={age} />
    </>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
)
