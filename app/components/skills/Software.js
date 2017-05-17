import React from 'react'
import '../public/Global.css'

export default class Software extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
      return <div className="skill">
        <h1>Software</h1>
        <ul>
          <li><img src="./images/postgresql.png" /></li>
          <li><img src="./images/atom.png" /></li>
          <li><img src="./images/sql-server.png" /></li>
          <li><img src="./images/myob-rm.png" /></li>
          <li><img src="./images/myob-exo.png" /></li>
        </ul>
      </div>
  }
}
