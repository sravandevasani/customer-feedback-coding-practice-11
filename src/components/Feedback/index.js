import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  onClickDisplayThankYou = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {resources} = this.props

    const {emojis, loveEmojiUrl} = resources

    const {isClicked} = this.state

    console.log(emojis)
    console.log(loveEmojiUrl)
    console.log(isClicked)
    return (
      <div className="bg-container">
        <div className="content-bg-container">
          {isClicked && (
            <div className="content-container">
              <img className="love-image" alt="love emoji" src={loveEmojiUrl} />
              <h1 className="thanku-heading">Thank you</h1>
              <p className="description">
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          )}
          {!isClicked && (
            <div className="content-container">
              <h1 className="heading">
                How satisfied are you with our customer support performance
              </h1>
              <div className="emojis-container">
                {emojis.map(eachObj => (
                  <img
                    className="emoji-icon"
                    alt={eachObj.name}
                    key={eachObj.id}
                    src={eachObj.imageUrl}
                    onClick={this.onClickDisplayThankYou}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
