import React from 'react';
import { THandleChange } from '..';

export const useSidebarMenuList = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange: THandleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return {
    expanded,
    handleChange,
  };
};
