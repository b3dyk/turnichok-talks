import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useCheckbox } from './hooks';
import { SxPropsInterface } from '../../interfaces';

interface Props {
  children: React.ReactNode;
  sx?: SxPropsInterface;
}

export const CheckBox = ({ children, sx }: Props) => {
  const { checked, handleChange } = useCheckbox();

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          color="primary"
          sx={{
            '& .MuiSvgIcon-root': {
              color: 'primary.lightText',
              strokeWidth: '0.5',
              borderRadius: '3px',
            },
          }}
        />
      }
      label={children}
      sx={{
        justifyContent: 'flex-start',
        mr: 0,
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '150%',
        textAlign: 'left',
        color: 'primary.mainText',
        ...sx,
      }}
    />
  );
};
