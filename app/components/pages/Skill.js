import React from 'react'
import ProgrammingSkill from '../skills/ProgrammingSkill'
import Framework from '../skills/Framework'
import Software from '../skills/Software'
import Library from '../skills/Library'
import Tool from '../skills/Tool'

export default class Skill extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
      return <div>
        <ProgrammingSkill />
        <Framework />
        <Software />
        <Library />
        <Tool />
      </div>
  }
}
