import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import { getQuizDetails } from "./services/api";
import { Quiz } from "./types";
function App() {
  const [quiz, setQuiz] = useState<any>([]);
  let [score, setScore] = useState<any>(0);
  let [currentQuiz, setCurrentQuiz] = useState(0);
  const ans = quiz[currentQuiz].answer;

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    // if (quiz[currentQuiz].answer === ans) setScore(++score);
    if (currentQuiz !== quiz.length - 1) setCurrentQuiz(++currentQuiz);
    else {
      alert("completed");
      setCurrentQuiz(0);
    }
  };
  useEffect(() => {
    async function fetchData() {
      let data: Quiz[] = await getQuizDetails(3, "easy");
      setQuiz(data);
    }
    fetchData();
  }, []);
  console.log(ans, score);
  if (!quiz.length)
    return (
      <>
        <h1>loading...</h1>
      </>
    );
  return (
    <>
      <h1>{currentQuiz}</h1>
      {
        <Card
          question={quiz[currentQuiz].question}
          options={quiz[currentQuiz].options}
          submit={handleSubmit}
        />
      }
    </>
  );
}

export default App;
