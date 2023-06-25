import { useMemo, useState } from 'react';
import { CourseInterface } from '../interfaces';

export const useCourseVariants = (courses: CourseInterface[]) => {
  const [selectedItem, setSelectedItem] = useState<string>(courses[0].title);

  const handleMenuItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const courseVariant = useMemo(
    () => courses.filter(course => course.title !== selectedItem),
    [selectedItem, courses]
  );

  return { courseVariant, selectedItem, handleMenuItemClick };
};
