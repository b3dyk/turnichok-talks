import { Courses } from './Courses';
import { WhyUs } from './WhyUs';
import { Founder } from './Founder';
import { Intro } from './Intro';
import { LeaveReview, Payment, Questions, Reviews } from 'src/common/components';

export const Home2Feature = () => (
  <div>
      <Intro variant="marathon" />
      <Courses />
      <WhyUs />
      <Payment />
      <Founder />
      <Reviews />
      <LeaveReview />
      <Questions />
  </div>
);
