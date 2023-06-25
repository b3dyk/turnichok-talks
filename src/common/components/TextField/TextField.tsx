import { TextField as TextFieldMUI, TextFieldProps } from '@mui/material';
import { useStyle } from './hooks';
import { TSxVariant } from './interfaces';

interface IExtendProps {
  sxVariant?: TSxVariant;
}

export const TextField = ({
  sx,
  sxVariant,
  ...props
}: TextFieldProps & IExtendProps) => {
  const sxStyle = useStyle(sxVariant);
  return (
    <TextFieldMUI
      {...props}
      autoComplete="off"
      sx={{
        ...sxStyle,
        ...sx,
      }}
    />
  );
};
