import {
  TAlcohol,
  TDecoration,
  TEInvite,
  TFood,
  TGames,
  TGuestSize,
  TOccasion,
} from 'types';
import { IColors, IFormInput } from '../types';

export const FORM_INPUTS: IFormInput[] = [
  { id: 'eventName', i18nKey: 'event-name' },
  { id: 'date', i18nKey: 'date', placeholder: 'DD-MM-YYYY', hasIcon: true },
  { id: 'time', i18nKey: 'time', placeholder: 'HH:MM', hasIcon: true },
  { id: 'budget', i18nKey: 'budget', type: 'number', hasIcon: true },
];

export const OCCASION_OPTIONS: TOccasion[] = [
  'anniversary',
  'birthday',
  'dinner',
  'meet-up',
  'other',
];

export const GUEST_SIZE_OPTIONS: TGuestSize[] = ['large', 'medium', 'small'];

export const E_INVITE_OPTIONS: TEInvite[] = ['yes', 'no'];

export const FOOD_OPTIONS: TFood[] = [
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

export const GAMES_OPTIONS: TGames[] = ['yes', 'no', 'i-have-at-home'];

export const COLORS: IColors = {
  anniversary: '#FF9A98',
  birthday: '#D898FF',
  dinner: '#98FF9C',
  'meet-up': '#76A9FF',
  other: '#FFED9B',
  small: '#D898FF',
  medium: '#FF9A98',
  large: '#98FF9C',
};
