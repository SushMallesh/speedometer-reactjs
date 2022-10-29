import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAcceleration = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({
        count: prevState.count + 10,
      }))
    }
  }

  onApplyBrake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="speedometer-image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speedometer-heading">Speed is {count}mph</h1>
        <p className="description">Min limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            onClick={this.onAcceleration}
            className="accelerate-button"
          >
            Accelerate
          </button>
          <button
            type="button"
            onClick={this.onApplyBrake}
            className="apply-brake-button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
