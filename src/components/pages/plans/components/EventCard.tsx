import { Box, Stack, Typography } from '@mui/material';
import Calendar from 'assets/images/Calendar.png';
import moment from 'moment';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ICreatedEvent } from 'types';
import { CardWrapper } from './styled';

const EventCard: FC<{ event: ICreatedEvent }> = ({ event }) => {
  const { t } = useTranslation();
  const daysToGo = moment(event.timestamp).diff(moment(), 'days');
  const navigate = useNavigate();

  return (
    <Box
      sx={{ cursor: 'pointer', '&:hover': { opacity: 0.9 } }}
      onClick={() => navigate(`/event/${event.id}`)}
    >
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
          <Stack direction='row' gap='48px'>
            {[
              {
                title: 'done',
                amount: event.todos.filter((todo) => todo.isDone).length,
              },
              {
                title: 'todo',
                amount: event.todos.filter((todo) => !todo.isDone).length,
              },
            ].map((item) => (
              <Stack key={item.title}>
                <Typography>{item.amount}</Typography>
                <Typography variant='subtitle2'>
                  {t(`plans.${item.title}`)}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <img src={Calendar} alt='Clipboard' loading='lazy' height='94px' />
      </CardWrapper>
    </Box>
  );
};

export default EventCard;
