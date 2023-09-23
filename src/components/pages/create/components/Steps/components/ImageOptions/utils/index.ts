import { TStep } from 'types';
import { GUEST_SIZE_OPTIONS, OCCASION_OPTIONS } from '../constants';

export const getI18nStepKey = (step: TStep) => {
  switch (step) {
    case 'occasion':
      return 'occasion';
    case 'guestSize':
      return 'guest-size';
  }
};

export const getOptions = (step: TStep) => {
  switch (step) {
    case 'occasion':
      return OCCASION_OPTIONS;
    case 'guestSize':
      return GUEST_SIZE_OPTIONS;
  }
};
