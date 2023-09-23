import { Stack, Typography } from '@mui/material';
import { Icon } from 'components/global';
import moment from 'moment';
import { FC } from 'react';
import { ICreatedEvent } from 'types';

const OutDateCard: FC<{ event: ICreatedEvent }> = ({ event }) => (
  <Stack
    padding='8px'
    width='156px'
    height='123px'
    flexGrow={{ sm: 1 }}
    borderRadius='8px'
    bgcolor='base.cards'
    gap='8px'
  >
    <Icon id={event.occasion} style={{ width: '32px', height: '32px' }} />
    <Typography variant='body2'>{event.name}</Typography>
    <Typography variant='subtitle2'>
      {moment(event.timestamp).format('DD-MM-YYYY')}
    </Typography>
    <Typography variant='subtitle2'>
      {moment(event.timestamp).format('H:MM A')}
    </Typography>
  </Stack>
);

export default OutDateCard;
