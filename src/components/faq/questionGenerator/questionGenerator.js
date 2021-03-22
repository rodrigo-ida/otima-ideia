import StyledQuestion from './styledQuestionGenerator'


const QuestionGenerator = (props) => {

    return(
        <StyledQuestion >
                        <div className="question-wrapper">
                            <p className="description">
                            {props.question}
                            </p>
                            <button>
                                +
                            </button>
                        </div>
        </StyledQuestion>
    )
}

export default QuestionGenerator