import { Box, Container } from '@mui/material';
import { Typography } from 'src/common/components';
import { useQuestions, useShowAnswer } from './hooks';
import { QuestionsItem } from './components';

export const Questions = () => {
  const questions = useQuestions();
  const { expanded, handleShowAnswer } = useShowAnswer();

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'primary.light',
        py: { xs: '32px', md: '64px' },
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'flex-start', sm: 'center' },
        }}
      >
        <Typography variant="primary">Поширені запитання</Typography>
        <Box component="ul">
          {questions.map(question => (
            <QuestionsItem
              key={question.id}
              question={question}
              expanded={expanded}
              handleShowAnswer={handleShowAnswer}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
