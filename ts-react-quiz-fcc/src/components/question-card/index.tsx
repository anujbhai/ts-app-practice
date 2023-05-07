import React from 'react'

type QuestionCardProps = {
  question: string
  answers: string[]
  callback: any
  userAnswer: any
  questionNo: number
  totalQuestions: number
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNo,
  totalQuestions,
}: QuestionCardProps) => {
  return (
    <div>
      <p className="number">
        Question: { questionNo } / { totalQuestions }
      </p>

      <p dangerouslySetInnerHTML={ { __html: question } } />

      <div>
        { answers.map(answer => (
          <div>
            <button disabled={ userAnswer } onClick={ callback }>
              <span dangerouslySetInnerHTML={ { __html: answer } } />
            </button>
          </div>
        )) }
      </div>
    </div>
  )
}

export default QuestionCard
