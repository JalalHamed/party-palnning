import { Dispatch, SetStateAction } from 'react';
import { TOccasion, TStep } from 'types';

export interface IStepsProps {
  step: TStep;
}

export interface IOccasionProps {
  active: '' | TOccasion;
  setActive: Dispatch<SetStateAction<'' | TOccasion>>;
}
