import { Form } from 'src/common/components/Form';
import { TextField } from 'src/common/components/TextField';
import { Button } from 'src/common/components/Button';
import { useApollo, useForm } from '../hooks';
import { SEND_SUBSCRIPTION } from '../graphql';

export const SubscriptionForm = () => {
  const { onSubmit } = useApollo(SEND_SUBSCRIPTION);
  const { errors, values, touched, handleChange, handleBlur, handleSubmit } =
    useForm(onSubmit);
  return (
    <Form
      sx={{
        flexDirection: 'row',
        width: { xs: '328px', sm: '444px', md: '466px', lg: '535px' },
        p: '0',
      }}
      handleSubmit={handleSubmit}
    >
      <TextField
        name="email"
        label="Ваш e-mail.."
        variant="outlined"
        sxVariant="subscription"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete="off"
        error={touched.email && !!errors.email}
        helperText={touched.email && errors.email}
      />
      <Button
        type="submit"
        variant="primary"
        sx={{
          minWidth: '120px',
          minHeight: '40px',
          borderBottomLeftRadius: '0',
          borderTopLeftRadius: '0',
        }}
      >
        Надіслати
      </Button>
    </Form>
  );
};
