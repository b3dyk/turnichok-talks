import { TextareaAutosize, TextareaAutosizeProps, Typography, TypographyProps } from '@mui/material';
import { IAutosizeTextareaExtendedProps } from './interfaces';

type Props = TextareaAutosizeProps & TypographyProps & IAutosizeTextareaExtendedProps;

export const AutosizeTextarea = (
  {
    variant,
    component = 'div',
    sx,
    ...textareaProps
  }: Props) => {
  return (
    <Typography
      variant={variant}
      component={component}
      sx={{
        '& textarea': {
          display: 'block',
          width: '100%',
          p: 2,
          fontSize: 'inherit',
          lineHeight: 'inherit',
          resize: 'none',
          color: 'secondary.lightText',
          backgroundColor: 'secondary.main',
          borderRadius: '5px',
          borderWidth: '1px',
          borderColor: 'secondary.main',
          outline: 'none',
          ['&:hover']: {
            borderColor: 'secondary.mainText',
          },
          ['&:focus']: {
            borderColor: 'secondary.mainText',
            backgroundColor: 'secondary.light',
          },
        },
        ...sx,
      }}
    >
      <TextareaAutosize
        name={textareaProps.name}
        value={textareaProps.value}
        onChange={textareaProps.onChange}
        aria-label={textareaProps['aria-label']}
        placeholder={textareaProps.placeholder}
        minRows={textareaProps.minRows}
        maxRows={textareaProps.maxRows}
        {...textareaProps}
      />
    </Typography>
  );
};
