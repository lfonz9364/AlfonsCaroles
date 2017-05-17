import React from 'react'
import '../public/Global.css'

export default class Framework extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
      return <div className="skill">
        <h1>Frameworks</h1>
        <ul>
          <li><img src="./images/handlebars.png" /></li>
          <li><img src="./images/backbone.png" /></li>
          <li><img src="./images/node.png" /></li>
        </ul>
      </div>
  }
}
