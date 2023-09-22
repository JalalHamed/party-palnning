import { FC } from 'react';
import { useSelector } from 'react-redux';
import { TStep } from 'types';
import { Buttons, Form, GuestSize, Occasion } from './components';

const Steps: FC = () => {
  const event = useSelector((state: any) => state.event);

  return (
    <>
      {
        {
          occasion: <Occasion active={event.occasion} />,
          guestSize: <GuestSize active={event.guestSize} />,
          form: <Form active={event.form} />,
        }[event.step as TStep]
      }
      <Buttons step={event.step} />
    </>
  );
};

export default Steps;
