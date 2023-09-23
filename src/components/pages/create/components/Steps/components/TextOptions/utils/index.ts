import { TStep } from 'types';
import {
  ALCOHOL_OPTIONS,
  DECORATION_OPTIONS,
  E_INVITE_OPTIONS,
  FOOD_ARRANGEMENT_OPTIONS,
  GAMES_OPTIONS,
} from '../constants';

export const getI18nStepKey = (step: TStep) => {
  switch (step) {
    case 'eInvite':
      return 'e-invite';
    case 'foodArrangement':
      return 'food-arrangement';
    case 'alcohol':
      return 'alcohol';
    case 'decoration':
      return 'decoration';
    case 'games':
      return 'games';
  }
};

export const getOptions = (step: TStep) => {
  switch (step) {
    case 'eInvite':
      return E_INVITE_OPTIONS;
    case 'foodArrangement':
      return FOOD_ARRANGEMENT_OPTIONS;
    case 'alcohol':
      return ALCOHOL_OPTIONS;
    case 'decoration':
      return DECORATION_OPTIONS;
    case 'games':
      return GAMES_OPTIONS;
  }
};
