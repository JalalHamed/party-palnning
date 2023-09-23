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
      return 'food';
    case 'food':
      return 'alcohol';
    case 'alcohol':
      return 'decoration';
    case 'decoration':
      return 'games';
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
    case 'food':
      return 'eInvite';
    case 'alcohol':
      return 'food';
    case 'decoration':
      return 'alcohol';
    case 'games':
      return 'decoration';
    default:
      return step;
  }
};

export const convertToUnix = (date: string, time: string): number => {
  const [day, month, year] = date.split('-').map(Number);
  const [hours, minutes] = time.split(':').map(Number);
  return Date.UTC(year, month - 1, day, hours, minutes);
};
