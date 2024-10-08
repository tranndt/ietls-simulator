import React, { useState,useEffect} from 'react';
import MatchingHeadingsQuestionItem from "./MatchingHeadingsQuestionItem";
import ListOfHeadingsTable from "../Table/ListOfHeadingsTable";
import QuestionTaskDescription from "./QuestionTaskDescription";
import './QuestionStyles.css';


function MatchingHeadingsQuestionTask({ questionTask, onTaskGrading, showAnswers }) {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleItemGrading = (isCorrect) => {
    // Increment or decrement based on whether the answer is correct or incorrect
    setCorrectAnswers((prevCorrect) => prevCorrect + (isCorrect ? 1 : 0));
    onTaskGrading(isCorrect);  // Notify parent of each individual grading event
  };

  useEffect(() => {
    if (!showAnswers) {
      setCorrectAnswers(0);  // Reset correct answers when hiding answers
    }
  }, [showAnswers]);

  return (
    <div className="matching-headings-question-task">
      <QuestionTaskDescription taskDescription={questionTask.taskDescription} />
      <ListOfHeadingsTable tableTitle = {questionTask.tableTitle} tableData={questionTask.tableData} />
      {questionTask.exampleAnswer &&
      <table>
      <thead>
        <tr style={{padding:'.25em'}}>
          <th style={{width:'5em'}}>
            Example
          </th>
          <th style={{width:'5em'}}>
            {questionTask.exampleAnswer[0]}
          </th>
          <th style={{width:'5em'}}>
            {questionTask.exampleAnswer[1]}
          </th>
        </tr>
      </thead>
      </table>
      }        
      {questionTask.questions.map((questionItem, index) => (
        <MatchingHeadingsQuestionItem
          key={index}
          id={index}
          questionItem = {questionItem}
          onItemGrading={handleItemGrading}
          showAnswers={showAnswers}
        />
      ))}
      {showAnswers && (
        <div className="task-score">
          Task Score: {correctAnswers} / {questionTask.questions.length}
        </div>
      )}
    </div>
  );
}

export default MatchingHeadingsQuestionTask;

