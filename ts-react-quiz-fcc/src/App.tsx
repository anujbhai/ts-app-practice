import React, { useState } from 'react'

import QuestionCard from './components/question-card'
import { fetchQuizQuestions, Category, Difficulty, QuestionState } from './API'

type AnswerObject = {
  question: string
  answer: string
  correct: boolean
  correctAnswer: string
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
    console.log('check answer')
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

      <p className="score">Score:</p>

      <p>Loading Questions...</p>

      {/* <QuestionCard
        questionNo={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}

      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  )
}

export default App
