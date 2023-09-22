import { Dispatch, SetStateAction } from 'react';
import { TOccasion } from 'types';

export interface IStepsProps {
  step: 'occasion';
}

export interface IOccasionProps {
  active: '' | TOccasion;
  setActive: Dispatch<SetStateAction<'' | TOccasion>>;
}
