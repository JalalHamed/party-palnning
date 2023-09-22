import { TStep } from 'types';

export const getNextStep = (step: TStep) => {
  switch (step) {
    case 'occasion':
      return 'guestSize';
    case 'guestSize':
      return 'form';
    case 'form':
      return 'eInvite';
    case 'eInvite':
      return 'foodArrangement';
    case 'foodArrangement':
      return 'alcohol';
    default:
      return step;
  }
};

export const getPrevStep = (step: TStep) => {
  switch (step) {
    case 'guestSize':
      return 'occasion';
    case 'form':
      return 'guestSize';
    case 'eInvite':
      return 'form';
    case 'foodArrangement':
      return 'eInvite';
    case 'alcohol':
      return 'foodArrangement';
    default:
      return step;
  }
};
