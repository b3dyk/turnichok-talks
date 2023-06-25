export const useReviewLength = (review: string) => {
  return review.length > 180 ? review.slice(0, 180) + '...' : review;
};
