import { Box } from '@mui/material';
import { CourseInterface } from '../interfaces';
import { CourseTabsPanel } from './CourseTabsPanel';
import { useChangeCourse, useCourseVariants, useTabValue } from '../hooks';
import { MobileCourseTabs } from './MobileCourseTabs';

interface Props {
  courses: CourseInterface[];
}

export const MobileCourseInfo = ({ courses }: Props) => {
  const { handlePanelChange, expanded, handleExpandedChange } =
    useChangeCourse();
  const { value, handleValueChange } = useTabValue();
  const { courseVariant, selectedItem, handleMenuItemClick } =
    useCourseVariants(courses);

  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: '64px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '266px',
        }}
      >
        <MobileCourseTabs
          expanded={expanded}
          handlePanelChange={handlePanelChange}
          selectedItem={selectedItem}
          courseVariant={courseVariant}
          handleMenuItemClick={handleMenuItemClick}
          handleExpandedChange={handleExpandedChange}
          handleValueChange={handleValueChange}
        />
      </Box>
      {courses.map(course => (
        <CourseTabsPanel key={course.id} value={value} course={course} />
      ))}
    </>
  );
};
