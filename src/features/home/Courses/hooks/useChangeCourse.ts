import { useState } from 'react';

export const useChangeCourse = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handlePanelChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleExpandedChange = () => {
    setExpanded(false);
  };

  return { handlePanelChange, handleExpandedChange, expanded };
};
