import { Box, Input, Typography } from '@mui/material';
import { Button } from 'src/common/components';
import { Clip } from 'src/common/icons';
import { ReviewsRating } from 'src/common/components/ReviewsRating';
import { SubmitInterface } from 'src/common/components/Popup/interfaces';
import { TextField } from 'src/common/components/TextField';
import { PhoneInput } from 'src/common/components/PhoneInput';
import { CheckBox } from 'src/common/components/CheckBox';
import { PrivacyPolicy } from 'src/common/components/PrivacyPolicy';
import { Form } from 'src/common/components/Form/Form';
import { useForm, useLeftLocation } from '../hooks';

interface Props {
  onSubmit: SubmitInterface;
}

export const LeaveReviewForm = ({ onSubmit }: Props) => {
  const {
    errors,
    values,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useForm(onSubmit);

  const leftLocation = useLeftLocation();

  return (
    <Form
      handleSubmit={handleSubmit}
    >
      <TextField
        sx={{ marginBottom: '40px' }}
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
      <TextField
        sx={{ marginBottom: '40px' }}
        name="email"
        label="Пошта"
        variant="outlined"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete="off"
        error={!!errors.email && touched.email && !!errors.email}
        helperText={errors.email && touched.email && errors.email}
      />
      <PhoneInput
        sx={{ marginBottom: '40px' }}
        name="phone"
        value={values.phone}
        onBlur={handleBlur}
        onChangeValue={value => {
          setFieldValue('phone', value);
        }}
        error={!!errors.phone && touched.phone && !!errors.phone}
        helperText={errors.phone && touched.phone && errors.phone}
      />

      <Box sx={{ width: '100%', position: 'relative' }}>
        <TextField
          name="feedback"
          label="Залишити відгук..."
          variant="outlined"
          value={values.feedback}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
          error={!!errors.feedback && touched.feedback && !!errors.feedback}
          helperText={errors.feedback && touched.feedback && errors.feedback}
        />

        <Box
          component="label"
          htmlFor="file"
          sx={{
            position: 'absolute',
            bottom:
              errors.feedback && touched.feedback && errors.feedback
                ? '5px'
                : '-15px',
            left: leftLocation,
          }}
        >
          <div>
            <Clip />
          </div>
          <Input
            id="file"
            type="file"
            inputProps={{
              accept: 'image/png,image/jpg,image/gif,video/mp4,video/avi',
            }}
            onChange={handleChange}
            sx={{
              opacity: '0',
              height: '0',
              width: '0',
              lineHeight: '0',
              overflow: 'hidden',
              padding: '0',
              margin: '0',
            }}
          />
          <Typography
            variant="body1"
            sx={{
              border: '0',
              height: '1px',
              margin: '-1px',
              overflow: 'hidden',
              padding: '0',
              position: 'absolute',
              width: '1px',
            }}
          >
            Upload File
          </Typography>
        </Box>
      </Box>

      <CheckBox>
        <Typography
          variant="body1"
          sx={{ fontSize: 'inherit', letterSpacing: 'inherit' }}
        >
          Підписатись на розсилку
        </Typography>
      </CheckBox>
      <ReviewsRating quantity={0} sx={{ alignSelf: 'center', mb: '57px' }} />
      <CheckBox>
        <PrivacyPolicy />
      </CheckBox>

      <Button
        type="submit"
        variant="primary"
        sx={{
          width: '100%',
          marginBottom: '9px',
        }}
      >
        Залишити відгук
      </Button>
    </Form>
  );
};
