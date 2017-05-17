import React from 'react'
import '../public/Global.css'

export default class TimePeriod extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      years: []
    }
  }

  handleClick(event){
    if(event.target.previousSibling.checked === false){
      this.state.years.push(Number(event.target.previousSibling.value))
      this.props.getYear(this.state.years.sort())
      event.target.previousSibling.checked = true
    } else {
      this.state.years = this.state.years.filter(function(val){ return val !== Number(event.target.previousSibling.value)})
      this.props.getYear(this.state.years)
      event.target.previousSibling.checked = false
    }
  }

  render(){
      return <div className="timeperiod">
        <div className="checkboxGroup">
          <div className="circle">
            <input classID="circleInput" type="checkbox" value="2017" />
            <label htmlFor="circleInput" onClick={this.handleClick}></label>
          </div>
          <span>2017</span>
        </div>

        <div className="checkboxGroup">
          <div className="circle">
            <input classID="circleInput" type="checkbox" value="2016" />
            <label htmlFor="circleInput" onClick={this.handleClick}></label>
          </div>
          <span>2016</span>
        </div>

        <div className="checkboxGroup">
          <div className="circle">
            <input classID="circleInput" type="checkbox" value="2015" />
            <label htmlFor="circleInput" onClick={this.handleClick}></label>
          </div>
          <span>2015</span>
        </div>

        <div className="checkboxGroup">
          <div className="circle">
            <input classID="circleInput" type="checkbox" value="2014" />
            <label htmlFor="circleInput" onClick={this.handleClick}></label>
          </div>
          <span>2014</span>
        </div>

        <div className="checkboxGroup">
          <div className="circle">
            <input classID="circleInput" type="checkbox" value="2013" />
            <label htmlFor="circleInput" onClick={this.handleClick}></label>
          </div>
          <span>2013</span>
        </div>

        <div className="checkboxGroup">
          <div className="circle">
            <input classID="circleInput" type="checkbox" value="2012" />
            <label htmlFor="circleInput" onClick={this.handleClick}></label>
          </div>
          <span>2012</span>
        </div>

        <div className="checkboxGroup">
          <div className="circle">
            <input classID="circleInput" type="checkbox" value="2011" />
            <label htmlFor="circleInput" onClick={this.handleClick}></label>
          </div>
          <span>2011</span>
        </div>

        <div className="checkboxGroup">
          <div className="circle">
            <input classID="circleInput" type="checkbox" value="2010" />
            <label htmlFor="circleInput" onClick={this.handleClick}></label>
          </div>
          <span>2010</span>
        </div>

        <div className="checkboxGroup">
          <div className="circle">
            <input classID="circleInput" type="checkbox" value="2009" />
            <label htmlFor="circleInput" onClick={this.handleClick}></label>
          </div>
          <span>2009</span>
        </div>

        <div className="checkboxGroup">
          <div className="circle">
            <input classID="circleInput" type="checkbox" value="1" />
            <label htmlFor="circleInput" onClick={this.handleClick}></label>
          </div>
          <span>Show All</span>
        </div>
      </div>
  }
}
