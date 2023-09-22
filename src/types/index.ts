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

export type TStep = 'occasion' | 'guestSize';

export interface IEvent {
  step: TStep;
  occasion?: TOccasion;
  guestSize?: TGuestSize;
}

export interface IOptionCardProps {
  step: 'occasion' | 'guest-size';
  id: TOccasion | TGuestSize;
  active: TOccasion | TGuestSize;
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
