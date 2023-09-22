declare module '@mui/material/styles' {
  interface Palette {
    alerts: {
      warning: string;
      critical: string;
      success: string;
    };
    base: {
      background: string;
      cards: string;
    };
    icon: {
      main: string;
    };
    input: {
      background: string;
      border: string;
      placeholder: string;
    };
  }
}

export type TTheme = 'dark' | 'light';

export type TOccasion =
  | 'anniversary'
  | 'birthday'
  | 'dinner'
  | 'meet-up'
  | 'other';

export interface IHistory {
  title: string;
  date: Date;
}

export type TGuestSize = 'small' | 'medium' | 'large';

export type TStep =
  | 'occasion'
  | 'guestSize'
  | 'form'
  | 'eInvite'
  | 'foodArrangement';

export interface IForm {
  eventName?: string;
  date?: string;
  time?: string;
  budget?: number;
}

export type TEInvite = 'yes' | 'no';

export type TFoodArrangement =
  | 'order-in'
  | 'home-cooked-food'
  | 'book-a-caterer'
  | 'potluck';

export interface IEvent {
  step: TStep;
  occasion?: TOccasion;
  guestSize?: TGuestSize;
  form: IForm;
  eInvite?: TEInvite;
  foodArrangement?: TFoodArrangement;
}

export interface IOptionCardProps {
  step: 'occasion' | 'guest-size';
  id: TOccasion | TGuestSize;
  active: TOccasion | TGuestSize | undefined;
  onClick: any;
}

export interface IColorSlice {
  anniversary: string;
  birthday: string;
  dinner: string;
  'meet-up': string;
  other: string;
  small: string;
  medium: string;
  large: string;
}
