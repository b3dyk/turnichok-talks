import { SyntheticEvent, useState } from 'react';
import programData from 'src/data/front-end-basic-program.json';
import { IFrontEndBasicProgramItem } from '../interfaces';

const programList = programData as IFrontEndBasicProgramItem[];

export const useProgramList = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  return { expanded, handleChange, programList };
};
