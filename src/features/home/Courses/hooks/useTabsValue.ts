import { useState } from 'react';

export const useTabValue = () => {
  const [value, setValue] = useState(0);

  const handleValueChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return { value, handleValueChange };
};
