import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  onClickDisplayThankYou = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  renderThankyouScreen = () => {
    const {resources} = this.props

    const {loveEmojiUrl} = resources

    return (
      <div className="content-container">
        <img className="love-image" alt="love emoji" src={loveEmojiUrl} />
        <h1 className="thanku-heading">Thank you</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  renderFeedbackScreen = () => {
    const {resources} = this.props

    const {emojis} = resources

    return (
      <div className="content-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="emojis-container">
          {emojis.map(eachObj => (
            <li key={eachObj.id}>
              <img
                className="emoji-icon"
                alt={eachObj.name}
                src={eachObj.imageUrl}
                onClick={this.onClickDisplayThankYou}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isClicked} = this.state

    return (
      <div className="bg-container">
        <div className="content-bg-container">
          {isClicked && this.renderThankyouScreen()}
          {!isClicked && this.renderFeedbackScreen()}
        </div>
      </div>
    )
  }
}

export default Feedback
