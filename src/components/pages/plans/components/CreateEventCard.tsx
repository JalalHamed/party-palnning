import { Button, Stack, Typography } from '@mui/material';
import Clipboard from 'assets/images/Clipboard.png';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const CreateEventCard: FC = () => {
  const { t } = useTranslation();

  return (
    <Stack
      direction='row'
      padding='16px'
      borderRadius='8px'
      justifyContent='space-between'
      sx={{
        background: 'linear-gradient(to right, #50586A, #1E2530)',
      }}
    >
      <Stack gap='16px'>
        <Stack gap='8px'>
          <Typography variant='body1' color='#FFF'>
            {t('plans.no-upcoming')}
          </Typography>
          <Typography variant='subtitle2' color='#FFF'>
            {t('plans.plan-party')}
          </Typography>
        </Stack>
        <Button
          variant='contained'
          sx={{ width: 'fit-content', p: '11px 16px 12px' }}
        >
          <Typography variant='body2' color='#FFF' textTransform='uppercase'>
            {t('plans.create')}
          </Typography>
        </Button>
      </Stack>
      <img
        src={Clipboard}
        alt='Clipboard'
        loading='lazy'
        width='76px'
        height='94px'
      />
    </Stack>
  );
};

export default CreateEventCard;
