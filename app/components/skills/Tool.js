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
          <li><img src="./images/github.png" /></li>
          <li><img src="./images/cli.png" /></li>
          <li><img src="./images/webpack.png" /></li>
          <li><img src="./images/npm.png" /></li>
          <li><img src="./images/babel.png" /></li>
          <li><img src="./images/geocoder.png" /></li>
        </ul>
      </div>
  }
}
