import { IWhyItem } from '../interfaces';
import listData from 'src/data/why-front-end.json';


const itemList = listData as IWhyItem[];

export const useWhyThisCourse = () => itemList;
