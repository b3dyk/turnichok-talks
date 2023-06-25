export const useHiddenTab = (value: number, id: number) => {
  const hidden = value !== id;
  return hidden;
};
