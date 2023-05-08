import React, { ReactNode } from 'react'

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
  const renderObjectValues = () => {
    return Object.keys(answers).map((key: string) => {
      const answer: string = answers[key]

      if (answer === null) {
        return
      }

      return (
        <div key={ answer }>
          <button
            disabled={ userAnswer }
            onClick={ callback }
            value={ answer }
          >
            <span dangerouslySetInnerHTML={ { __html: answer } } />
          </button>
        </div>
      )
    })
  }

  return (
    <div>
      <p className="number">
        Question: { questionNo } / { totalQuestions }
      </p>

      <p dangerouslySetInnerHTML={ { __html: question } } />

      <div>
        { renderObjectValues() }
      </div>
    </div>
  )
}

export default QuestionCard
