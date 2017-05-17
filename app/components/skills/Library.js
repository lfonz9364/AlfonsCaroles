import React from 'react'

export default class Library extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
      return <div className="skill">
        <h1>Libraries</h1>
        <ul>
          <li><img src="./images/jquery.png" /></li>
          <li><img src="./images/underscore.png" /></li>
          <li><img src="./images/react.png" /></li>
          <li><img src="./images/sinatra.png" /></li>
          <li><img src="./images/rails.png" /></li>
        </ul>
      </div>
  }
}
