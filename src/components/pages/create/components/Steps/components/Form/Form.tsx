import { Stack } from '@mui/material';
import { FC } from 'react';
import { FORM_INPUTS } from '../../constants';
import Input from './components/Input';
import { TInput, Ti18nKey } from './types';

const Form: FC = () => (
  <Stack gap='16px'>
    {FORM_INPUTS.map(({ id, i18nKey, placeholder, hasIcon, type }) => (
      <Input
        key={id}
        id={id as TInput}
        i18nKey={i18nKey as Ti18nKey}
        placeholder={placeholder}
        hasIcon={hasIcon}
        type={type as 'number' | 'text'}
      />
    ))}
  </Stack>
);

export default Form;
