import { Stack, Typography } from '@mui/material';
import { ContactItem } from './ContactItem';
import { useContactList, useSocialList } from '../hooks';
import { SocialList } from 'src/common/components/SocialList';
import { SxPropsInterface } from 'src/common/interfaces';

interface Props {
  sx?: SxPropsInterface;
}

export const ContactInfo = ({ sx }: Props) => {
  const contactsList = useContactList();
  const socialList = useSocialList();
  return (
    <Stack
      sx={{
        p: { xs: '16px', sm: '71px 24px' },
        color: 'lightPrimary.mainText',
        backgroundColor: 'lightPrimary.action',
        borderRadius: '4px',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url("/icons/logo/bg-logo-small.svg")',
        backgroundSize: { xs: '314px 318px', sm: '394px 399px' },
        backgroundPosition: {
          xs: 'bottom -66px right -123px',
          sm: 'bottom -49px right -131px',
          md: 'bottom -54px right -101px',
        },
        ...sx,
      }}
    >
      <Stack
        sx={{
          gap: { sm: 1 },
          mb: { xs: 3, sm: 4 },
          py: { sm: 1 },
        }}
      >
        <Typography variant="h3" component="h2" color="inherit">
          Контактна інформація
        </Typography>
        <Typography variant="p2" component="p" color="inherit">
          Скажіть щось, щоб розпочати живий чат!
        </Typography>
      </Stack>

      <Stack gap={1} sx={{ mb: { xs: 3, sm: 5 } }}>
        {contactsList.map(({ id, Icon, text }) => (
          <ContactItem key={id} Icon={Icon} text={text} />
        ))}
      </Stack>

      <SocialList
        socialList={socialList}
        sx={{ mt: 0, p: { xs: '8px 24px', sm: '8px 0' }, color: 'inherit' }}
        iconSx={{ p: '6px' }}
      />
    </Stack>
  );
};
