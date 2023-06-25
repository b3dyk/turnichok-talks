import { Box } from '@mui/material';
import { AutosizeTextarea, Button } from 'src/common/components';
import { useForm } from '../hooks';
import { SubmitInterface } from 'src/common/components/Popup/interfaces';
import { TextField } from '../../TextField';
import { PhoneInput } from '../../PhoneInput';
import { CheckBox } from '../../CheckBox';
import { PrivacyPolicy } from '../../PrivacyPolicy';
import { Form } from '../../Form';

interface Props {
  onSubmit: SubmitInterface;
}

export const CallbackForm = ({ onSubmit }: Props) => {
  const {
    errors,
    values,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useForm(onSubmit);

  return (
    <Form handleSubmit={handleSubmit} sx={{ flexGrow: 1 }}>
      <TextField
        sx={{ marginBottom: '56px' }}
        name="name"
        label="Ім'я"
        variant="outlined"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete="off"
        error={!!errors.name && touched.name && !!errors.name}
        helperText={errors.name && touched.name && errors.name}
      />
      <PhoneInput
        sx={{ marginBottom: '56px' }}
        name="phone"
        value={values.phone}
        onBlur={handleBlur}
        onChangeValue={value => {
          setFieldValue('phone', value);
        }}
        error={!!errors.phone && touched.phone && !!errors.phone}
        helperText={errors.phone && touched.phone && errors.phone}
      />
      <AutosizeTextarea
        variant='p2'
        name="message"
        value={values.message}
        onChange={handleChange}
        aria-label="minimum height"
        placeholder="Залиште свій коментар..."
        minRows={4}
        maxRows={10}
        sx={{ mb: '56px' }}
      />
      <Box sx={{ mt: 'auto' }}>
        <CheckBox sx={{ mb: 1 }}>
          <PrivacyPolicy/>
        </CheckBox>
        <Button
          type="submit"
          variant="primary"
          sx={{ width: '100%' }}
        >
          Залишити запит
        </Button>
      </Box>
    </Form>
  );
};
