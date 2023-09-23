import { Button, Stack, Typography } from '@mui/material';
import Clipboard from 'assets/images/Clipboard.png';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { CardWrapper } from './styled';

const CreateEventCard: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <CardWrapper>
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
          onClick={() => navigate('/create')}
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
    </CardWrapper>
  );
};

export default CreateEventCard;
