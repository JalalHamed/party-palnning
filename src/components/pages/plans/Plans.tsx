import { Stack, Typography } from '@mui/material';
import { AppLayout } from 'components/global';
import moment from 'moment';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TState } from 'store';
import { CreateEventCard, EventCard, Header } from './components';
import OutDateCard from './components/OutDateCard';

const Plans: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const events = useSelector((state: TState) => state.events.events);
  const upcomings = events.filter(
    (event) => moment(event.timestamp) > moment()
  );
  const outdates = events.filter((event) => moment(event.timestamp) < moment());

  return (
    <AppLayout gap='24px'>
      <Header />
      {upcomings.length ? (
        <Stack gap='16px'>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
          >
            <Typography>{t('plans.upcoming')}</Typography>
            <Typography
              variant='body2'
              padding='8px 14px'
              bgcolor='base.cards'
              borderRadius='8px'
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate('/create')}
            >
              {t('plans.create-new')}
            </Typography>
          </Stack>
          {upcomings.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </Stack>
      ) : (
        <CreateEventCard />
      )}
      {outdates.length ? (
        <Stack gap='16px'>
          <Typography>{t('plans.outdate')}</Typography>
          <Stack direction='row' gap='16px' flexWrap='wrap'>
            {outdates.map((event) => (
              <OutDateCard key={event.id} event={event} />
            ))}
          </Stack>
        </Stack>
      ) : null}
    </AppLayout>
  );
};

export default Plans;
