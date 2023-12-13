import React from "react";

export type Quiz = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};
export type cardType = {
  question: string;
  options: string[];
  submit: (e: React.FormEvent<EventTarget>) => void;
};
