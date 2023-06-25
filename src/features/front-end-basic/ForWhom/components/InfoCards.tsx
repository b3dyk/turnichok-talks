import { Stack } from '@mui/material';
import { InfoCard } from './InfoCard';
import { SxPropsInterface } from 'src/common/interfaces';

interface Props {
  sx?: SxPropsInterface
}

export const InfoCards = ({ sx }: Props) => (
  <Stack
    sx={{
      gap: { xs: 3, md: 4 },
      ...sx,
    }}
  >
    <InfoCard
      title='Online'
      text='Цей курс проводиться в форматі онлайн заняття'
    />
    <InfoCard
      title='Front-end basic'
      text='Курс орієнтований на початківців у програмуванні та не потребує базових знань. Для навчання
              необхідно впевнено користуватись комп’ютером.'
    />
  </Stack>
);
