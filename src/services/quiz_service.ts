import {Quiz, QuestionType} from '../types/quiz_types'

const shuffleArray = (array : any[]) => 
  [...array].sort(() => Math.random() - 0.5)



export const getQuizDetails = async (questionNumber: number,difLevel: string) : Promise<QuestionType[]> => {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=${questionNumber}&difficuilty=${difLevel}&type=multiple`
  );
  // let data : QuestionType[]  = await res.json();
  // const results  = data.results.map() 

    let {results} = await res.json();
    const quiz : QuestionType[] = results.map((questionObj : Quiz) => {
      return{
        question : questionObj.question,
        answer : questionObj.correct_answer,
        correct_answer : questionObj.correct_answer,
        options : shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer)),
      }
    })

    return quiz

};
