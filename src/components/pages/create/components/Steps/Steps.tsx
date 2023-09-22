import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Buttons, GuestSize, Occasion } from './components';
import { IStepsProps } from './types';

const Steps: FC<IStepsProps> = ({ step }) => {
  const event = useSelector((state: any) => state.event);

  return (
    <>
      {
        {
          occasion: <Occasion active={event.occasion} />,
          guestSize: <GuestSize active={event.guestSize} />,
        }[step]
      }
      <Buttons step={event.step} />
    </>
  );
};

export default Steps;
