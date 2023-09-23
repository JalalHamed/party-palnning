import { TAlcohol, TDecoration, TEInvite, TFoodArrangement } from 'types';

export const E_INVITE_OPTIONS: TEInvite[] = ['yes', 'no'];

export const FOOD_ARRANGEMENT_OPTIONS: TFoodArrangement[] = [
  'order-in',
  'home-cooked-food',
  'book-a-caterer',
  'potluck',
];

export const ALCOHOL_OPTIONS: TAlcohol[] = [
  'yes-order',
  'yes-have',
  'bring-your-own',
  'no',
];

export const DECORATION_OPTIONS: TDecoration[] = [
  'yes',
  'no',
  'i-decorate-myself',
];
