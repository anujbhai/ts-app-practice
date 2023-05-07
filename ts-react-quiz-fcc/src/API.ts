export enum Category {
  LINUX = 'Linux',
  DEVOPS = 'DevOps',
  NETWORKING = 'Networking',
  PROGRAMMING = 'Programming',
  CLOUD = 'Cloud',
  DOCKER = 'Docker',
  CODE = 'Code',
}

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export type Tag = {
  name: string
}

export type Question = {
  answers: any
  category: string
  correct_answer?: null | string
  correct_answers: any
  description?: null | string
  difficulty: string
  explanation?: null | string
  id: number
  multiple_correct_answers: boolean
  question: string
  tags: Tag[]
  tip?: null | string
}

export type QuestionState = Question & { answers: string[] }

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
  const endpoint = `${ import.meta.env.VITE_API_URL }questions?limit=${ amount }&difficulty=${ difficulty }`
  const headers = {
    'X-Api-Key': `${ import.meta.env.VITE_API_KEY }`
  }
  const options = {
    method: 'GET',
    headers: headers
  }
  const data = await (await fetch(endpoint, options)).json()

  return data.map((question: Question) => (
    {
      ...question,
      answers: question.answers
    }
  ))
}
