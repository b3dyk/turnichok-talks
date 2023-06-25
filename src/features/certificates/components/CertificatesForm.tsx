import { Form } from 'src/common/components/Form';
import { TextField } from 'src/common/components/TextField';
import { Button } from 'src/common/components/Button';
import { useForm } from '../hooks';

export const CertificatesForm = () => {
  const {
    errors,
    values,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm();
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
        label="Номер сертефіката"
        variant="outlined"
        sxVariant="subscription"
        value={values.certificate}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete="off"
        error={touched.certificate && !!errors.certificate}
        helperText={touched.certificate && errors.certificate}
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
        Перевірити
      </Button>
    </Form>
  );
};
