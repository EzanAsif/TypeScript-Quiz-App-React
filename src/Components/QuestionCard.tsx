import React, {useState} from "react";
import { questionPropsType } from "../types/quiz_types";

export const QuestionCard: React.FC<questionPropsType> = ({
  question,
  options,
  callback,
}) => {
  
  let [selectedAns, setselectedAns] = useState("");

  const handleSelection = (ev:any) => {
      setselectedAns(ev.target.value)
      
  }

  return (
    <div className="question-container">
      <div className="question">
        <h2>{question}</h2>
      </div>

      <form onSubmit = {(e:React.FormEvent<EventTarget>) => callback(e, selectedAns)}>
        {options.map((option: string, index: number) => {
          return (
            <div key={index}>
              <label>
                <input type="radio" name="opt" value={option} onChange = {handleSelection} checked = {selectedAns == option} required/>
                {option}
              </label>
            </div>
          );
        })}
        <input type="submit" />
      </form>
    </div>
  );
};

export default QuestionCard;
