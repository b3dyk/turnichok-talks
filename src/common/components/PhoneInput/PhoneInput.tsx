import { TextFieldProps } from '@mui/material';
import { useEffect } from 'react';
import { useIMask } from 'react-imask';
import { TextField, TSxVariant } from '../TextField';

interface Props {
  value: string
  onChangeValue: (value: string) => void;
  sxVariant?: TSxVariant
}

export function PhoneInput(
  {
    onChangeValue,
    sxVariant,
    value: propsValue,
    ...props
  }: Props & TextFieldProps) {

  const {
    ref,
    setValue,
    unmaskedValue,
  } = useIMask({
    mask: '+{38} ({\\0}00) 000 00 00',
    lazy: false,
  });

  useEffect(() => {
    onChangeValue(unmaskedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unmaskedValue]);

  useEffect(() => {
    setValue(propsValue);
  }, [propsValue, setValue]);

  return <TextField inputRef={ref} sxVariant={sxVariant} {...props} />;
}
