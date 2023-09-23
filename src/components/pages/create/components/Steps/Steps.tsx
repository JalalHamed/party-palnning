import { FC } from 'react';
import { useSelector } from 'react-redux';
import { TState } from 'store';
import { Buttons, Form, GuestSize, Occasion, TextOptions } from './components';

const Steps: FC = () => {
  const event = useSelector((state: TState) => state.event);

  const displayStep = () => {
    if (event.step === 'occasion') return <Occasion active={event.occasion} />;
    if (event.step === 'guestSize')
      return <GuestSize active={event.guestSize} />;
    if (event.step === 'form') return <Form />;
    return <TextOptions />;
  };

  return (
    <>
      {displayStep()}
      <Buttons step={event.step} />
    </>
  );
};

export default Steps;
