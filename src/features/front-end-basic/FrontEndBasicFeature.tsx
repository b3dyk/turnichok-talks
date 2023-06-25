import { Intro } from './Intro';
import { ForWhom } from './ForWhom';
import { WhyThisCourse } from './WhyThisCourse';
import { CourseProgram } from './CourseProgram';
import { OurTeachers } from './OurTeachers';
import { LeaveReview, Payment, Questions, Reviews } from 'src/common/components';

export const FrontEndBasicFeature = () => (
  <>
    <Intro/>
    <ForWhom/>
    <WhyThisCourse/>
    <CourseProgram/>
    <OurTeachers/>
    <Payment/>
    <Reviews/>
    <LeaveReview/>
    <Questions/>
  </>
);
