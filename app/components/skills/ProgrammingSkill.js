import React from 'react'
import '../public/Global.css'

export default class ProgrammingSkill extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
      return <div className="skill">
        <h1>Programming Language</h1>
        <ul>
          <li><img src="./images/html-css-js-logos.png" /></li>
          <li><img src="./images/sqlQueries.jpeg" /></li>
          <li><img src="./images/jquery-icon.png" /></li>
          <li><img src="./images/underscore.png" /></li>
          <li><img src="./images/handlebars.png" /></li>
          <li><img src="./images/backbone.png" /></li>
          <li><img src="./images/ruby.jpeg" /></li>
          <li><img src="./images/nodejs.png" /></li>
        </ul>
      </div>
  }
}
