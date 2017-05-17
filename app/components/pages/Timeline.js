import React from 'react'
import TimePeriod from '../public/TimePeriod'
import Education from '../public/Education'
import Experience from '../public/Experience'

export default class Timeline extends React.Component {

  constructor(props) {
    super(props)
    this.getYear = this.getYear.bind(this)
    this.state = {
      period: []
    }
  }

  getYear(selectedYears){
    if(selectedYears[0] === 1 ){
      this.setState({ period: [2009,2010,2011,2012,2013,2014,2015,2016,2017] })
    } else {
      this.setState({ period: selectedYears })
    }
  }

  render(){
      return <div className="timeline">
        <TimePeriod getYear={this.getYear} />
        <Education period={this.state.period} />
        <Experience period={this.state.period} />
      </div>
  }
}
