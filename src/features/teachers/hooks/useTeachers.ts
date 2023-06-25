import teacher from 'src/data/our-teachers.json';
import { ITeacher } from 'src/common/components/TeachersCard';

export const useTeachers = (): ITeacher[] => teacher;
