import { setEInvite, setFoodArrangement } from 'store/eventSlice';
import { TStep } from 'types';
import {
  ALCOHOL_OPTIONS,
  E_INVITE_OPTIONS,
  FOOD_ARRANGEMENT_OPTIONS,
} from '../constants';

export const getI18nStepKey = (step: TStep) => {
  switch (step) {
    case 'eInvite':
      return 'e-invite';
    case 'foodArrangement':
      return 'food-arrangement';
    case 'alcohol':
      return 'alcohol';
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
  }
};

export const useReducer = (step: TStep) => {
  switch (step) {
    case 'eInvite':
      return setEInvite;
    case 'foodArrangement':
      return setFoodArrangement;
    default:
      return setFoodArrangement;
  }
};
