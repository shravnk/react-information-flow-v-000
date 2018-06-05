import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    const color = initialColor
    const childColor = getReducedColor(initialColor)
    const nestedChildColor = getReducedColor(childColor)
    this.state = {
      color: color,
      childColor: childColor,
      nestedChildColor: nestedChildColor
    }
  }

  handleClick = () => {
  const initialColor = getRandomColor()
  const color = initialColor
  const childColor = getReducedColor(initialColor)
  const nestedChildColor = getReducedColor(childColor)
  this.setState({
    color: color,
    childColor: childColor,
    nestedChildColor: nestedChildColor
  })
}

  childClicked = (event) => {
    event.stopPropagation()
    const childColor = getRandomColor()
    const nestedChildColor = getReducedColor(childColor)
    this.setState({
      childColor: childColor,
      nestedChildColor: nestedChildColor
    })
  }

  nestedChildClicked = (event) => {
    event.stopPropagation()
    const nestedChildColor = getRandomColor()
    this.setState({
      nestedChildColor: nestedChildColor
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.handleClick} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} childColor={this.state.nestedChildColor} handleClick={this.childClicked} handleChildClick={this.nestedChildClicked}/>
        <Tier2 color={this.state.childColor} childColor={this.state.nestedChildColor} handleClick={this.childClicked} handleChildClick={this.nestedChildClicked}/>
      </div>
    )
  }
}
