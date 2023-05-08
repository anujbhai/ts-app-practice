import React, { useState } from 'react'

import QuestionCard from './components/question-card'
import { fetchQuizQuestions, Category, Difficulty, QuestionState } from './API'

type AnswerObject = {
  question: string
  answer: string
  correct: boolean
  correctAnswer: string | null | undefined
}

const TOTAL_QUESTIONS = 10

function App() {
  const [loading, setLoading] = useState<boolean>(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState<number>(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState<number>(0)
  const [gameOver, setGameOver] = useState<boolean>(true)

  console.log('quiz questions:', questions)

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    )

    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value

      const getCorrectAnswer = (ans: string[], correctAns: string[]): string | null => {
        for (const key in correctAns) {
          if (correctAns[key] === 'true') {
            const ansKey = key.replace('_correct', '')

            // eslint-disable-next-line no-prototype-builtins
            if (ans.hasOwnProperty(ansKey)) {
              return ans[ansKey]
            }
          }
        }

        return null
      }

      const getCorrectAnswerKey = (ans: string, correctAns: string[]): string | null => {
        for (const key in correctAns) {
          if (correctAns[key] === 'true') {
            const ansKey = key.replace('_correct', '')

            // eslint-disable-next-line no-prototype-builtins
            if (ans.hasOwnProperty(ansKey)) {
              return ansKey
            }
          }
        }

        return null
      }

      const correct = getCorrectAnswer(questions[number].answers, questions[number].correct_answers) === answer

      if (correct) {
        setScore(prevScore => prevScore + 1)
      }

      const answerObj = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: getCorrectAnswerKey(questions[number].answers, questions[number].correct_answers),
      }

      console.log('answer obj:', answerObj)
      
      console.log('user answers:', userAnswers)

      setUserAnswers((prev) => [...prev, answerObj])

      console.log('user answers:', userAnswers)
    }
  }

  const nextQuestion = () => {
    console.log('next question');
  }

  return (
    <div>
      <h1>REACT QUIZ</h1>

      { gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>
          Start
        </button>
      ) : null }

      { !gameOver ? <p className="score">Score:</p> : null }

      { loading ? <p>Loading Questions...</p> : null }

      { !loading && !gameOver && (
        <QuestionCard
          questionNo={ number + 1 }
          totalQuestions={ TOTAL_QUESTIONS }
          question={ questions[number].question }
          answers={ questions[number].answers }
          userAnswer={ userAnswers ? userAnswers[number] : undefined }
          callback={ checkAnswer }
        />
      ) }

      { !gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null }
    </div>
  )
}

export default App
