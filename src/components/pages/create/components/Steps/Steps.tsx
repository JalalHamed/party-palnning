import { FC } from 'react';
import { useSelector } from 'react-redux';
import { TState } from 'store';
import { TStep } from 'types';
import { Buttons, Form, GuestSize, Occasion, TextOptions } from './components';

const Steps: FC = () => {
  const event = useSelector((state: TState) => state.event);

  return (
    <>
      {
        {
          occasion: <Occasion active={event.occasion} />,
          guestSize: <GuestSize active={event.guestSize} />,
          form: <Form />,
          eInvite: <TextOptions />,
          foodArrangement: <TextOptions />,
        }[event.step as TStep]
      }
      <Buttons step={event.step} />
    </>
  );
};

export default Steps;
