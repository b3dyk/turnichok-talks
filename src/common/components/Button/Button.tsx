import ButtonMUI from '@mui/material/Button';
import { MouseEvent, ReactNode } from 'react';
import { ButtonTypes } from './interfaces';
import { useButton } from './hooks';
import { SxPropsInterface } from 'src/common/interfaces';

interface Props {
  variant: ButtonTypes;
  children: ReactNode;
  sx?: SxPropsInterface;
  type?: any;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  disabled?: boolean;
}

export const Button = ({
  href,
  variant,
  children,
  sx,
  type,
  onClick,
}: Props) => {
  const styles = useButton(variant);

  return (
    <ButtonMUI
      disableRipple
      href={href}
      onClick={onClick}
      type={type}
      sx={{ ...styles, ...sx }}
    >
      {children}
    </ButtonMUI>
  );
};
