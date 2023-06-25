import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material';
import { useProgramList } from '../hooks';
import { ItemIndex } from '.';

export const ProgramList = () => {
  const { expanded, handleChange, programList } = useProgramList();
  return (
    <Stack
      sx={{ gap: { xs: 3, sm: 1, md: 3 } }}
    >
      {programList.map(({ title, itemList }, i) =>
        <Accordion
          key={i}
          expanded={expanded === `programItem${i}`}
          onChange={handleChange(`programItem${i}`)}
          sx={{
            backgroundColor: 'transparent',
            ['&.Mui-expanded']: {
              mt: 0,
            },
          }}
        >
          <AccordionSummary
            aria-controls={`programItem${i}bh-content`}
            id={`programItem${i}bh-header`}
            sx={{
              px: 2,
              borderRadius: '10px',
              ['&:hover']: {
                backgroundColor: 'secondary.main',
              },
              ['& .MuiAccordionSummary-content']: {
                alignItems: 'center',
                gap: { xs: 2, sm: 3, md: 5 },
                my: 1,
              },
              ['& .MuiAccordionSummary-content.Mui-expanded']: {
                my: 1,
              },
            }}
          >
            <ItemIndex index={i + 1}/>
            <Typography variant='h3' component='h3' color='secondary.lightText'>
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 2, sm: '10px' },
              pt: { xs: 1, md: 3 },
              pb: { xs: 0, sm: 1, md: 4 },
              pl: { xs: '82px', sm: '96px', md: '112px' },
            }}
          >
            {itemList.map((it, i) =>
              <Typography key={i} variant='p3' component='p' color='secondary.mainText'>{it}</Typography>
            )}
          </AccordionDetails>
        </Accordion>
      )}
    </Stack>
  );
};
