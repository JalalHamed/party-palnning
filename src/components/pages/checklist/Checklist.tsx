import {
  Checkbox,
  ClickAwayListener,
  InputBase,
  Stack,
  Typography,
} from '@mui/material';
import { AppLayout } from 'components/global';
import moment from 'moment';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TState } from 'store';
import { setTodo, switchIsDone } from 'store/eventsSlice';
import { Header } from './components';

const Checklist: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { eventId } = useParams();
  const events = useSelector((state: TState) => state.events.events);
  const event = eventId
    ? events.filter((event) => event.id === +eventId)[0]
    : null;
  const daysToGo = event ? moment(event.timestamp).diff(moment(), 'days') : '';
  const [value, setValue] = useState<string>('');
  const [showInput, setShowInput] = useState<boolean>(false);

  return event && eventId ? (
    <AppLayout gap='18px'>
      <Header />
      <Stack
        direction='row'
        justifyContent='space-between'
        borderBottom='1px solid'
        borderColor='input.border'
        paddingBottom='16px'
      >
        {[
          {
            title: t('plans.days-to-go', { days: daysToGo }),
            value: event.name,
          },
          {
            title: t('plans.done'),
            value: event.todos.filter((todo) => todo.isDone).length,
          },
          {
            title: t('plans.todo'),
            value: event.todos.filter((todo) => !todo.isDone).length,
          },
        ].map((item) => (
          <Stack key={item.title} gap='8px'>
            <Typography flexGrow={1}>{item.value}</Typography>
            <Typography variant='subtitle2'>{item.title}</Typography>
          </Stack>
        ))}
      </Stack>
      <Stack gap='16px'>
        {event.todos.map((todo, index) => (
          <Typography
            key={index}
            bgcolor='base.cards'
            borderRadius='8px'
            variant='body2'
          >
            <Checkbox
              checked={todo.isDone}
              value=''
              onChange={() =>
                dispatch(
                  switchIsDone({
                    eventId: +eventId,
                    todoIndex: index,
                    isDone: !todo.isDone,
                  })
                )
              }
            />
            {todo.title}
          </Typography>
        ))}
        <ClickAwayListener onClickAway={() => setShowInput(false)}>
          <Stack
            direction='row'
            alignItems='center'
            onClick={() => setShowInput(true)}
            sx={{
              cursor: 'pointer',
              bgcolor: 'base.cards',
              borderRadius: '8px',
              variant: 'body2',
            }}
          >
            <Checkbox value='' />
            {showInput ? (
              <form
                onSubmit={() => {
                  dispatch(setTodo({ eventId: +eventId, value }));
                  setValue('');
                  setShowInput(false);
                }}
              >
                <InputBase
                  autoFocus
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </form>
            ) : (
              <Typography variant='subtitle2'>{t('checklist.add')}</Typography>
            )}
          </Stack>
        </ClickAwayListener>
      </Stack>
    </AppLayout>
  ) : null;
};

export default Checklist;
