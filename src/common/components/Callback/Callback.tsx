import { Button } from 'src/common/components';
import { SxPropsInterface } from 'src/common/interfaces';
import { CallbackForm } from './components';
import { Popup } from '../Popup';
import { useApollo, usePopup } from '../Popup/hooks';
import { SEND_CALLBACK_MUTATION } from './graphql';
import { useSocialList } from './hooks';
import { SocialList } from '../SocialList';

interface Props {
  sx?: SxPropsInterface;
}

export const Callback = ({ sx }: Props) => {
  const { handleClose, handleOpen, isOpen } = usePopup();
  const { onSubmit } = useApollo(handleClose, SEND_CALLBACK_MUTATION);
  const socialList = useSocialList();

  return (
    <>
      <Button variant="primary" sx={sx} onClick={handleOpen}>
        Консультація
      </Button>
      <Popup title="Запит на консультацію" open={isOpen} onClose={handleClose}>
        <CallbackForm onSubmit={onSubmit}/>
        <SocialList socialList={socialList} sx={{ justifyContent: 'center', width: '100%', mt: 2 }}/>
      </Popup>
    </>
  );
};
