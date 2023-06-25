export const useAccessibility = () => {
  const accessibility = (index: number) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  });

  return accessibility;
};
