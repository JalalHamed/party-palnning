import { Stack, Typography } from '@mui/material';
import Calendar from 'assets/images/Calendar.png';
import moment from 'moment';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ICreatedEvent } from 'types';
import { CardWrapper } from './styled';

const EventCard: FC<{ event: ICreatedEvent }> = ({ event }) => {
  const { t } = useTranslation();
  const daysToGo = moment(event.timestamp).diff(moment(), 'days');

  return (
    <CardWrapper>
      <Stack gap='16px'>
        <Stack gap='8px'>
          <Typography variant='body1' color='#FFF'>
            {event.name}
          </Typography>
          <Typography variant='subtitle2' color='#FFF'>
            {t('plans.days-to-go', { days: daysToGo })}
          </Typography>
        </Stack>
      </Stack>
      <img src={Calendar} alt='Clipboard' loading='lazy' height='94px' />
    </CardWrapper>
  );
};

export default EventCard;
