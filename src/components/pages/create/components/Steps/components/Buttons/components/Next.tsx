import { Button, Typography } from '@mui/material';
import { STEPS } from 'constant';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TState } from 'store';
import { reset, setStep } from 'store/eventSlice';
import { addEvent } from 'store/eventsSlice';
import { TOccasion } from 'types';
import { isValidDate, isValidTime } from 'utils';
import { getDefaultTodos } from '../utils';

const Next: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const event = useSelector((state: TState) => state.event);
  const width = event.step === 'occasion' ? '100%' : '69%';
  const navigate = useNavigate();

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

  const handleClick = () => {
    if (event.step !== 'games')
      dispatch(setStep(STEPS[STEPS.indexOf(event.step) + 1]));
    // handle submit
    else {
      dispatch(
        addEvent({
          id: Date.now(),
          name: event.form.eventName as string,
          timestamp: `${(event.form.date as string)
            .split('-')
            .reverse()
            .join('-')}T${event.form.time as string}:00`,
          occasion: event.occasion as TOccasion,
          todos: getDefaultTodos(event),
        })
      );
      dispatch(reset());
      navigate('/');
    }
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
      onClick={handleClick}
    >
      <Typography variant='body2' color='#FFF'>
        {event.step === 'games' ? t('submit') : t('next')}
      </Typography>
    </Button>
  );
};

export default Next;
