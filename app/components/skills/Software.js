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
          <li><img src="./images/Atom.png" /></li>
          <li><img src="./images/sql-server.png" /></li>
          <li><img src="./images/msbids.jpg" /></li>
          <li><img src="./images/MSvisio.jpg" /></li>
          <li><img src="./images/myob-rm.jpg" /></li>
          <li><img src="./images/myob-exo.jpg" /></li>
        </ul>
      </div>
  }
}
