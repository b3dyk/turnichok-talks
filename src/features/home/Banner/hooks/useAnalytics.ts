import data from 'src/data/analytics.json';
import { IAnalyticsItem } from '../interfaces';

const analytics: IAnalyticsItem[] = data;
export const useAnalytics = () => analytics;
