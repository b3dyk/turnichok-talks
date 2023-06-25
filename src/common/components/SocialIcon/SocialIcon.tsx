import { IconButton } from '@mui/material';
import { SocialVariantTypes } from './interfaces';
import { useSocialIcon } from './useSocialIcon';
import { SxPropsInterface } from '../../interfaces';

interface Props {
  variant: SocialVariantTypes;
  sx?: SxPropsInterface;
}

export const SocialIcon = ({ variant, sx }: Props) => {
  const { src, Icon } = useSocialIcon(variant);

  return (
    <IconButton
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: '8px',
        fontSize: '20px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'inherit',
        color: 'inherit',
        ...sx,
      }}
      href={src}
    >
      <Icon/>
    </IconButton>
  );
};
