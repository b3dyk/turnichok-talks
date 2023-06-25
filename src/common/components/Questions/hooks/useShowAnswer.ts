import { SyntheticEvent, useState } from 'react';

export const useShowAnswer = () => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleShowAnswer =
    (panel: number) => (_: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return { expanded, handleShowAnswer };
};
