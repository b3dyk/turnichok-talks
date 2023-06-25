import coursesData from 'src/data/courses.json';
import { CourseInterface } from '../interfaces';

const courses = coursesData as CourseInterface[];
export const useCourses = () => courses;
