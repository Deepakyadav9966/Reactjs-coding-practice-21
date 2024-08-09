// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="ul-faq">
            {faqsList.map(eachList => (
              <FaqItem eachList={eachList} key={eachList.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
