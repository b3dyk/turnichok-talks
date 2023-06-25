import teachersData from 'src/data/our-teachers.json';
import { ITeacher } from 'src/common/components/TeachersCard';

const teachers = teachersData as ITeacher[];

export const useOurTeachers = () => teachers;
