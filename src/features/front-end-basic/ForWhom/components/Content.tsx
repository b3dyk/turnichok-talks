import { Stack, Typography } from '@mui/material';
import { SxPropsInterface } from 'src/common/interfaces';

interface Props {
  sx?: SxPropsInterface
}

export const Content = ({ sx }: Props) => (
  <Stack
    sx={sx}
  >
    <Typography variant='h2' component='h2' sx={{ mb: 2, color: 'primary.lightText' }}>
      Верстка - це легко
    </Typography>
    <Typography
      variant='p1'
      component='p'
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: { xs: 1, sm: 2 },
        mb: { xs: 3, md: 4 },
        color: 'primary.lightText',
      }}
    >
      <span>16 заннять</span>
      <span>2 заняття на тиждень</span>
      <span>9000₴</span>
    </Typography>
    <Typography variant='p2' component='p' sx={{ mb: { xs: 1 }, color: 'primary.mainText' }}>
      Розробка видимої частини будь-якого сайту називається Front-end, і це область програмування, яка
      розвивається швидше за інші. Жоден сучасний веб-сайт і веб-додаток не обійдуться без Front-end розробника.
    </Typography>
    <Typography variant='p2' component='p' sx={{ color: 'primary.mainText' }}>
      В рамках курсу Front-end Basic студенти без досвіду в розробці вивчають HTML і CSS та вчаться верстати
      сайти. Після успішного закінчення курсу студенти отримують достатньо знань і навичок для верстки сайту
      будь-якої складності.
    </Typography>
  </Stack>
);
