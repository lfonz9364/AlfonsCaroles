import React from 'react'
import '../public/Global.css'

export default class Tool extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
      return <div className="skill">
        <h1>Tools</h1>
        <ul>
          <li><img src="./images/cli.png" /></li>
          <li><img src="./images/github.jpg" /></li>
        </ul>
      </div>
  }
}
