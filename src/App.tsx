import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import { getQuizDetails } from "./services/api";
import { Quiz } from "./types";
function App() {
  const [quiz, setQuiz] = useState<Quiz[]>([]);
  useEffect(() => {
    async function fetchData() {
      let data: Quiz[] = await getQuizDetails(10, "easy");
      setQuiz(data);
    }
    fetchData();
  }, []);

  console.log(quiz);
  if (!quiz.length)
    return (
      <>
        <h1>loading...</h1>
      </>
    );
  return <>{<Card que={quiz[0].question} />}</>;
}

export default App;
