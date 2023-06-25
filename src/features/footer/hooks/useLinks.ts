import data from 'src/data/footer-links.json';
import { IFooterLinksItem } from 'src/common/interfaces';

const linksData: IFooterLinksItem[] = data;

export const useLinks = () => linksData;
