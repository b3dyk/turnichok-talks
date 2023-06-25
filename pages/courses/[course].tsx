import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const CoursePage: NextPage = () => {
  const {
    query: { course },
  } = useRouter();

  return <div>{course} page</div>;
};

export default CoursePage;
