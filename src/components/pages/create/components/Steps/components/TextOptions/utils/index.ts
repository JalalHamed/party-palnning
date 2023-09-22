import { TStep } from 'types';
import { E_INVITE_OPTIONS } from '../constants';

export const getI18nPageKey = (step: TStep) => {
  switch (step) {
    case 'eInvite':
      return 'e-invite';
  }
};

export const getOptions = (step: TStep) => {
  switch (step) {
    case 'eInvite':
      return E_INVITE_OPTIONS;
  }
};
