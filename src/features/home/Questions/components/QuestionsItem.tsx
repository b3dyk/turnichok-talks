import {
  Box,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Accordion,
} from '@mui/material';
import { ArrowDown } from 'src/common/icons';
import { HandleShowAnswer, QuestionsInterface } from '../interfaces';

interface Props {
  question: QuestionsInterface;
  expanded: number | boolean;
  handleShowAnswer: (id: number) => HandleShowAnswer;
}

export const QuestionsItem = ({
  question: { question, answer, id },
  expanded,
  handleShowAnswer,
}: Props) => (
  <Box
    component="li"
    sx={{
      textAlign: 'left',
      '&:not(:last-child)': {
        marginBottom: '16px',
      },
    }}
  >
    <Accordion
      sx={{
        color: 'secondary.lightText',
        backgroundColor: expanded === id ? 'secondary.main' : 'transparent',
        borderRadius: '10px',
        boxShadow: 'none',

        '&.MuiAccordion-root': {
          borderRadius: '4px',
        },

        '& .MuiPaper-root': {
          borderRadius: '4px',
        },

        '& .MuiAccordionSummary-root ': {
          minHeight: '48px',
        },
      }}
      expanded={expanded === id}
      onChange={handleShowAnswer(id)}
    >
      <AccordionSummary
        sx={{
          minHeight: { xs: '100%', sm: '48px', md: '56px' },
          p: { xs: '8px', sm: '8px 16px', md: '16px' },
          borderRadius: '4px',
          borderBottom: ' 1px solid #0f1928',
          borderBottomRightRadius: expanded === id ? 0 : '4px',
          borderBottomLeftRadius: expanded === id ? 0 : '4px',

          '&.Mui-expanded': {
            minHeight: { xs: '100%', sm: '48px', md: '56px' },
          },

          '& .MuiAccordionSummary-content': {
            margin: '0',
          },

          '&:hover': {
            backgroundColor: 'secondary.light',
          },
        }}
        expandIcon={<ArrowDown />}
        aria-controls={`${id}`}
        id={`${id}`}
      >
        <Typography>{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  </Box>
);
