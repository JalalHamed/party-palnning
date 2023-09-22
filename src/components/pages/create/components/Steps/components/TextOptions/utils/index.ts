import { TStep } from 'types';
import { E_INVITE_OPTIONS, FOOD_ARRANGEMENT_OPTIONS } from '../constants';

export const getI18nPageKey = (step: TStep) => {
  switch (step) {
    case 'eInvite':
      return 'e-invite';
    case 'foodArrangement':
      return 'food-arrangement';
  }
};

export const getOptions = (step: TStep) => {
  switch (step) {
    case 'eInvite':
      return E_INVITE_OPTIONS;
    case 'foodArrangement':
      return FOOD_ARRANGEMENT_OPTIONS;
  }
};
