import { Button, Typography, useTheme } from '@mui/material';
import { MouseEvent } from 'react';
import { ArrowDown } from 'src/common/icons/ArrowDown';

interface Props {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
  title: string;
}

export const NavListButton = ({ onClick, isOpen, title }: Props) => {
  const theme = useTheme();

  return (
    <Button
      sx={{
        color: 'primary.mainText',
        textTransform: 'capitalize',
        padding: '10px 0',
        '&:hover': {
          background: 'none',
        },
        '& .MuiButton-endIcon > svg': {
          transition: theme.transitions.create(['transform'], {
            duration: theme.transitions.duration.short,
            easing: theme.transitions.easing.easeInOut,
          }),
          transform: isOpen ? 'rotate(180deg)' : 'none',
        },
      }}
      id="basic-button"
      aria-controls={isOpen ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={isOpen ? 'true' : undefined}
      onClick={onClick}
      endIcon={<ArrowDown />}
    >
      <Typography variant="p1">{title}</Typography>
    </Button>
  );
};
