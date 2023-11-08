import { Quiz } from "../types";
export const getQuizDetails = async (
  totalQuestions: number,
  level: string
): Promise<Quiz[]> => {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`
  );
  const { results } = await response.json();

  let result: Quiz[] = results.map((item: Quiz) => {
    return {
      question: item.question,
      answer: item.correct_answer,
      options: item.incorrect_answers,
    };
  });
  console.log(result);
  return result;
};
