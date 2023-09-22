import { Button, Typography } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setStep } from 'store/eventSlice';
import { Occasion } from './components';
import GuestSize from './components/GuestSize';
import { IStepsProps } from './types';

const Steps: FC<IStepsProps> = ({ step }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const event = useSelector((state: any) => state.event);

  const handleClick = () => {
    switch (step) {
      case 'occasion':
        dispatch(setStep('guestSize'));
        break;
      default:
        break;
    }
  };

  return (
    <>
      {
        {
          occasion: <Occasion active={event.occasion} />,
          guestSize: <GuestSize active={event.guestSize} />,
        }[step]
      }
      <Button
        variant='contained'
        sx={{
          position: 'fixed',
          bottom: '24px',
          width: { xs: 'calc(100% - 32px)', sm: 'calc(100% - 48px)' },
          opacity: !event[step] ? 0.5 : 1,
        }}
        disabled={!event[step]}
        onClick={handleClick}
      >
        <Typography variant='body2' color='#FFF'>
          {t('next')}
        </Typography>
      </Button>
    </>
  );
};

export default Steps;
