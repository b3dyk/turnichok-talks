import { useState } from 'react';

export const useTopMenu = () => {
  const [isMenuOpen, setIsOpen] = useState(true);

  return { isMenuOpen, onMenuClose: () => setIsOpen(false) };
};
