import { CourseInterface } from '../interfaces';
import { CourseTabsPanel } from './CourseTabsPanel';
import { useAccessibility, useTabValue } from '../hooks';
import { CourseTabs } from './CourseTabs';

interface IProps {
  courses: CourseInterface[];
}

export const CourseInfo = ({ courses }: IProps) => {
  const accessibility = useAccessibility();
  const { value, handleValueChange } = useTabValue();

  return (
    <>
      <CourseTabs
        value={value}
        handleValueChange={handleValueChange}
        courses={courses}
        accessibility={accessibility}
      />
      {courses.map((course, idx) => (
        <CourseTabsPanel
          key={course.id}
          value={value}
          idx={idx}
          course={course}
        />
      ))}
    </>
  );
};
