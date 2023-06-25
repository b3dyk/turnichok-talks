export interface QuestionsInterface {
  id: number;
  question: string;
  answer: string;
}

export type HandleShowAnswer = (
  evt: React.SyntheticEvent<Element, Event>,
  id: boolean
) => void;
