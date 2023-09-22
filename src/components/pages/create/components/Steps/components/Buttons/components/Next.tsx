import { Button, Typography } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setStep } from 'store/eventSlice';
import { TStep } from 'types';

const Next: FC<{ step: TStep }> = ({ step }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isOccasion = step === 'occasion';
  const width = isOccasion ? '100%' : '69%';

  const handleNextClick = () => {
    switch (step) {
      case 'occasion':
        dispatch(setStep('guestSize'));
        break;
      default:
        break;
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
        opacity: !step ? 0.5 : 1,
      }}
      disabled={!step}
      onClick={handleNextClick}
    >
      <Typography variant='body2' color='#FFF'>
        {t('next')}
      </Typography>
    </Button>
  );
};

export default Next;
