import React from 'react'

export default class ProgrammingSkill extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
      return <div className="skill">
        <h1>Programming Languages</h1>
        <ul>
          <li><img src="./images/sql-query.png" /></li>
          <li><img src="./images/html-css-javascript.png" /></li>
          <li><img src="./images/ruby.png" /></li>
        </ul>
      </div>
  }
}
