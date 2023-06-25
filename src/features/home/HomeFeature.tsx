import { Courses } from './Courses';
import { WhyUs } from './WhyUs';
import { Founder } from './Founder';
import { Intro } from './Intro';
import {
  LeaveReview,
  Payment,
  Questions,
  Reviews,
} from 'src/common/components';

export const HomeFeature = () => (
  <div>
    <Intro variant="default" />
    <Courses />
    <WhyUs />
    <Founder />
    <Payment />
    <Reviews />
    <LeaveReview />
    <Questions />
  </div>
);
