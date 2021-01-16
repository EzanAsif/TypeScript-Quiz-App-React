import {Quiz, QuestionType} from '../types/quiz_types'

export const getQuizDetails <> = async (questionNumber: number,difLevel: string) => {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=${questionNumber}&difficuilty=${difLevel}&type=multiple`
  );
  let data : QuestionType[]  = await res.json();
  return data
};
