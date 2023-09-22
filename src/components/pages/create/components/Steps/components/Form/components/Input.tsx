import { Box, InputBase, Stack, Typography } from '@mui/material';
import { Icon } from 'components/global';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { TState } from 'store';
import { setBudget, setDate, setEventName, setTime } from 'store/eventSlice';
import { IInput } from '../types';

const Input: FC<IInput> = ({ id, i18nKey, placeholder, hasIcon, type }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const form = useSelector((state: TState) => state.event.form);
  const isFa = localStorage.getItem('i18nextLng') === 'fa';

  const handleChange = (value: string) => {
    switch (id) {
      case 'eventName':
        dispatch(setEventName(value));
        break;
      case 'date':
        dispatch(setDate(value));
        break;
      case 'time':
        dispatch(setTime(value));
        break;
      case 'budget':
        dispatch(setBudget(+value));
        break;
    }
  };

  return (
    <Stack gap='8px'>
      <Typography variant='body2'>{t(`create.form.${i18nKey}`)}</Typography>
      <Box position='relative'>
        <InputBase
          value={form?.[id]}
          onChange={(e) => handleChange(e.target.value)}
          sx={{
            bgcolor: 'base.cards',
            border: '1px solid',
            borderColor: 'input.border',
            borderRadius: '8px',
            padding: '6px 12px',
            fontSize: '12px',
            fontWeight: 400,
            width: '100%',
          }}
          type={type ? type : 'text'}
          placeholder={placeholder}
        />
        {hasIcon ? (
          <Icon
            id={id}
            style={{
              position: 'absolute',
              [isFa ? 'left' : 'right']: '12px',
              top: '8px',
            }}
          />
        ) : null}
      </Box>
    </Stack>
  );
};

export default Input;
