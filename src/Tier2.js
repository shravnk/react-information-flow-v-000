import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }

  childClicked = () => {
    this.setState({
      childColor: getRandomColor()
    })
  }



  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div className="tier2" onClick={this.props.handleClick}  style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={this.props.childColor} handleChildClick={this.props.handleChildClick}/>
        <Tier3 color={this.props.childColor} handleChildClick={this.props.handleChildClick}/>
      </div>
    )
  }
}
