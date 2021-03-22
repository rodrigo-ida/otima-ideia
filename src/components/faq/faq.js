import StyledFaq from './styledFaq'
import TitleGenerator from '../../util/titleGenerator'
import QuestionGenerator from './questionGenerator/questionGenerator'
import faqData from '../../assets/faq/faqData'





const Faq = () => {

    const allQuestions = faqData.map((e, i) => (
        <QuestionGenerator question={e} key={'question' + i}/>
    ))

    return(
        <StyledFaq >
            <TitleGenerator title="Frequently Asked Questions" backgroundLetters="FAQ" />
            <div className="faq-list-wrapper">
                <ul className="faq-list">
                    {allQuestions}
                </ul>
            </div>
        </StyledFaq>
    )
}

export default Faq