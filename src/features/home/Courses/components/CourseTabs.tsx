import { Tab, Tabs } from '@mui/material';
import { CourseInterface, HandleValueChange } from '../interfaces';

type Accessibility = (value: number) => {
  id: string;
  'aria-controls': string;
};

interface Props {
  value: number;
  handleValueChange: HandleValueChange;
  courses: CourseInterface[];
  accessibility: Accessibility;
}

export const CourseTabs = ({
  value,
  handleValueChange,
  courses,
  accessibility,
}: Props) => (
  <Tabs
    value={value}
    onChange={handleValueChange}
    aria-label="course descriptions"
    sx={{
      backgroundColor: 'secondary.main',
      mb: '48px',
      borderRadius: '10px',
      minHeight: '100%',

      '& .MuiTabs-indicator': {
        display: 'none',
      },
    }}
  >
    {courses.map(({ id, title }) => (
      <Tab
        key={id}
        label={title}
        {...accessibility(id)}
        sx={{
          textTransform: 'none',
          minHeight: '40px',
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '24px',
          p: '8px 16px',
          borderRadius: '10px',
          color: 'lightPrimary.main',

          '&:not(:last-child)': {
            mr: '24px',
          },

          '&:hover': {
            backgroundColor: 'primary.light',
          },

          '&.Mui-selected': {
            backgroundColor: 'button.main',
          },
        }}
      />
    ))}
  </Tabs>
);
