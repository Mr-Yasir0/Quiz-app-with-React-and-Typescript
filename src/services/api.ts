import { Quiz } from "../types";
export const getQuizDetails = async (
  totalQuestions: number,
  level: string
): Promise<Quiz[]> => {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`
  );
  const { results } = await response.json();

  const shuffleOptions = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5);

  let result: Quiz[] = results.map((item: Quiz) => {
    return {
      question: item.question,
      answer: item.correct_answer,
      options: shuffleOptions(
        item.incorrect_answers.concat(item.correct_answer)
      ),
    };
  });
  // console.log(result);
  return result;
};
