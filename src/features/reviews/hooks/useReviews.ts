import reviewsData from 'src/data/reviews.json';
import { IReviewCard } from 'src/common/interfaces';
import { useRouter } from 'next/router';

const reviews = reviewsData as IReviewCard[];

export const useReviews = () => {
  const router = useRouter();
  const getIsCurrentAnchor = (separator: string, it: IReviewCard) =>
    router.asPath.split('#review-')[1] === it.id.toString();
  return { reviews, getIsCurrentAnchor };
};
