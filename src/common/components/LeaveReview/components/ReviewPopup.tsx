import { Button } from 'src/common/components';
import { Popup } from 'src/common/components/Popup';
import { useApollo, usePopup } from 'src/common/components/Popup/hooks';
import { LeaveReviewForm } from './LeaveReviewForm';
import { SEND_REVIEW_MUTATION } from '../graphql';

export const ReviewPopup = () => {
  const { handleClose, handleOpen, isOpen } = usePopup();
  const { onSubmit } = useApollo(handleClose, SEND_REVIEW_MUTATION);
  return (
    <>
      <Button
        variant="primary"
        sx={{ width: { xs: '296px', sm: '200px' } }}
        onClick={handleOpen}
      >
        Залишити відгук
      </Button>
      <Popup title="Залишити відгук" open={isOpen} onClose={handleClose}>
        <LeaveReviewForm onSubmit={onSubmit} />
      </Popup>
    </>
  );
};
