import { Button, Typography } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { TState } from 'store';
import { setStep } from 'store/eventSlice';
import { isValidDate, isValidTime } from 'utils';
import { getNextStep } from '../utils';

const Next: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const event = useSelector((state: TState) => state.event);
  const width = event.step === 'occasion' ? '100%' : '69%';

  const getDisabledStatus = (): boolean => {
    if (event.step === 'form')
      return (
        !event.form.budget ||
        !isValidDate(event.form.date as string) ||
        !event.form.eventName ||
        !isValidTime(event.form.time as string)
      );
    return !event[event.step];
  };

  return (
    <Button
      variant='contained'
      sx={{
        position: 'fixed',
        bottom: '24px',
        right: { xs: '16px', sm: '24px' },
        width: { xs: `calc(${width} - 32px)`, sm: `calc(${width} - 48px)` },
        opacity: !event.step ? 0.5 : 1,
      }}
      disabled={getDisabledStatus()}
      onClick={() => dispatch(setStep(getNextStep(event.step)))}
    >
      <Typography variant='body2' color='#FFF'>
        {t('next')}
      </Typography>
    </Button>
  );
};

export default Next;
