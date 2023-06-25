import { Box } from '@mui/system';
import { Stack, Typography } from '@mui/material';
import { DotsIconLink } from './DotsIconLink';
import { IUser } from 'src/common/interfaces';

interface Props {
  user: IUser
}

export const ProfileMenuHeader = ({ user }: Props) => (
  <Stack direction='row' flexGrow={1} sx={{ px: 2, color: 'primary.lightText' }}>
    <Box>
      <Typography>{user.name} {user.lastName}</Typography>
      <Typography>{user.email}</Typography>
    </Box>
    <DotsIconLink
      src='/profile'
      sx={{ alignSelf: 'flex-end', ml: 'auto', color: 'primary.lightText' }}
    />
  </Stack>
);
