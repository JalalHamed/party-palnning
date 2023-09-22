import { Button, Typography } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Occasion } from './components';
import { IStepsProps } from './types';

const Steps: FC<IStepsProps> = ({ step }) => {
  const { t } = useTranslation();

  return (
    <>
      {
        {
          occasion: <Occasion />,
        }[step]
      }
      <Button
        variant='contained'
        sx={{
          position: 'fixed',
          bottom: '24px',
          width: { xs: 'calc(100% - 32px)', sm: 'calc(100% - 48px)' },
        }}
      >
        <Typography variant='body2' color='#FFF'>
          {t('next')}
        </Typography>
      </Button>
    </>
  );
};

export default Steps;
