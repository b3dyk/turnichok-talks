export interface TechnologyInterface {
  type: string;
  title: string;
  icon: string;
}

export interface CourseInterface {
  id: number;
  title: string;
  description: string;
  promotion: boolean;
  studyingTimeText: string;
  price: number;
  numberOfVacancies: string;
  video: string;
  url: string;
  technologies: TechnologyInterface[];
}

export type HandleValueChange = (
  evt: React.SyntheticEvent<Element, Event>,
  id: number
) => void;
