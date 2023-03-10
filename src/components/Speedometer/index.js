import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  accelerateBtn = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  applyBreakBtn = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="header">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="para">Speed is {speed}mph</h1>
        <p className="para-2">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="btn-1" type="button" onClick={this.accelerateBtn}>
            Accelerate
          </button>
          <button className="btn-2" type="button" onClick={this.applyBreakBtn}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
