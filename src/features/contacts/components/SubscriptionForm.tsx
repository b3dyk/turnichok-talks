import { Stack } from '@mui/material';
import { Form } from 'src/common/components/Form';
import { Button, PhoneInput, TextField } from 'src/common/components';
import { useForm } from '../hooks';
import { SxPropsInterface } from 'src/common/interfaces';

interface Props {
  sx?: SxPropsInterface
}

export const SubscriptionForm = ({ sx }: Props) => {
  const {
    errors,
    values,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    isValid,
  } = useForm();

  return (
    <Form
      handleSubmit={handleSubmit}
      sx={{
        justifyContent: { md: 'center' },
        ...sx,
      }}
    >
      <Stack
        sx={{
          display: { sm: 'grid' },
          gridTemplateColumns: { md: '1fr 1fr' },
          columnGap: { md: '40px' },
          rowGap: { xs:'32px', md: '48px' },
          mb: { xs: '56px', sm: '64px', md: '144px' },
        }}
      >
        <TextField
          name="name"
          label="Iм'я"
          variant="outlined"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
          error={!!errors.name && touched.name && !!errors.name}
          helperText={errors.name && touched.name && errors.name}
          sxVariant='contacts'
        />
        <TextField
          name="surname"
          label="Прізвище"
          variant="outlined"
          value={values.surname}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
          error={!!errors.surname && touched.surname && !!errors.surname}
          helperText={errors.surname && touched.surname && errors.surname}
          sxVariant='contacts'
        />
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
          error={!!errors.email && touched.email && !!errors.email}
          helperText={errors.email && touched.email && errors.email}
          sxVariant='contacts'
        />
        <PhoneInput
          name="phone"
          value={values.phone}
          onBlur={handleBlur}
          onChangeValue={value => setFieldValue('phone', value)}
          error={!!errors.phone && touched.phone && !!errors.phone}
          helperText={errors.phone && touched.phone && errors.phone}
          sxVariant='contacts'
        />
      </Stack>
      <TextField
        name="comment"
        variant="outlined"
        value={values.comment}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete="off"
        placeholder='Залишити коментар...'
        error={!!errors.comment && touched.comment && !!errors.comment}
        helperText={errors.comment && touched.comment && errors.comment}
        sxVariant='contacts'
        sx={{ marginBottom: '40px' }}
      />
      <Button
        type="submit"
        variant="primary"
        disabled={!isValid}
        sx={{
          alignSelf: { sm: 'flex-end' },
          width: { xs: '100%', sm: '300px' },
        }}
      >
        Залишити коментар
      </Button>
    </Form>
  );
};
