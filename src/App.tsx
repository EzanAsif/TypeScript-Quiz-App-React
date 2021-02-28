import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuizDetails } from "./services/quiz_service";
import { Quiz, QuestionType } from "./types/quiz_types";
import QuestionCard from "./Components/QuestionCard";

function App() {
  const [quiz, setquiz] = useState<QuestionType[]>([]);
  let [currentStep, setcurrentStep] = useState(0);
  let [score, setscore] = useState(0);


  useEffect(() => {
    async function fetchData() {
      const questions:QuestionType[] = await getQuizDetails(5, "easy");
      console.log(questions)
      setquiz(questions)
    }
    fetchData();
  }, []);

  const handleSubmit = (e:React.FormEvent<EventTarget>, userAns:string) => {
    e.preventDefault();
    console.log(userAns);

    const currentQues : QuestionType = quiz[currentStep];
    
    if(userAns == currentQues.correct_answer){
      setscore(++score)
    }
    
    if(currentStep !== quiz.length-1){
      setcurrentStep(++currentStep);
    }
    else{
      alert("YOUR FINAL SCORE IS " + score + " out of " + quiz.length)
      alert("Quiz Completed");
      setcurrentStep(0);
      setscore(0);
    }
  }

  if(!quiz.length){ 
    return <h3>LOADING...</h3>
  }

  return (
    <div className="App">
      <QuestionCard options = {quiz[currentStep].options} question = {quiz[currentStep].question} callback = {handleSubmit}/>
    </div>
  );
}

export default App;
