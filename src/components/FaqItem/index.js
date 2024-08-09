// Write your code here.
import {Component} from 'react'
import './index.css'

const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  onClickToggle = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderImage = () => {
    const {isActive} = this.state
    const image = isActive ? minusImage : plusImage
    const altText = isActive ? 'minus' : 'plus'
    return (
      <button className="button" type="button" onClick={this.onClickToggle}>
        <img src={image} alt={altText} className="image" />
      </button>
    )
  }

  renderAnswer = () => {
    const {isActive} = this.state
    const {eachList} = this.props
    const {answerText} = eachList
    if (isActive) {
      return (
        <div>
          <hr className="hr-line" />
          <p className="para">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {eachList} = this.props
    const {questionText} = eachList
    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
