import { TStep } from 'types';

export const OCCASIONS = [
  'anniversary',
  'birthday',
  'dinner',
  'meet-up',
  'other',
];

export const GUEST_SIZE = ['small', 'medium', 'large'];

export const STEPS: TStep[] = [
  'occasion',
  'guestSize',
  'form',
  'eInvite',
  'foodArrangement',
  'alcohol',
  'decoration',
  'games',
]; // orders matter

export const FORM_INPUTS = [
  { id: 'eventName', i18nKey: 'event-name' },
  { id: 'date', i18nKey: 'date', placeholder: 'DD-MM-YYYY', hasIcon: true },
  { id: 'time', i18nKey: 'time', placeholder: 'HH:MM', hasIcon: true },
  { id: 'budget', i18nKey: 'budget', type: 'number', hasIcon: true },
];
