import { TStep } from 'types';
import {
  ALCOHOL_OPTIONS,
  DECORATION_OPTIONS,
  E_INVITE_OPTIONS,
  FOOD_OPTIONS,
  GAMES_OPTIONS,
  GUEST_SIZE_OPTIONS,
  OCCASION_OPTIONS,
} from '../constants';

export const getOptions = (step: TStep) => {
  switch (step) {
    case 'occasion':
      return OCCASION_OPTIONS;
    case 'guestSize':
      return GUEST_SIZE_OPTIONS;
    case 'eInvite':
      return E_INVITE_OPTIONS;
    case 'food':
      return FOOD_OPTIONS;
    case 'alcohol':
      return ALCOHOL_OPTIONS;
    case 'decoration':
      return DECORATION_OPTIONS;
    case 'games':
      return GAMES_OPTIONS;
  }
};
