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

export interface ITheme {
  theme: TTheme;
}

export type TOccasion =
  | 'anniversary'
  | 'birthday'
  | 'dinner'
  | 'meet-up'
  | 'other';

export type TGuestSize = 'small' | 'medium' | 'large';

export type TStep =
  | 'occasion'
  | 'guestSize'
  | 'form'
  | 'eInvite'
  | 'food'
  | 'alcohol'
  | 'decoration'
  | 'games';

export interface IForm {
  eventName?: string;
  date?: string;
  time?: string;
  budget?: number;
}

export type TEInvite = 'yes' | 'no';

export type TFood =
  | 'order-in'
  | 'home-cooked-food'
  | 'book-a-caterer'
  | 'potluck';

export type TAlcohol = 'yes-order' | 'yes-have' | 'bring-your-own' | 'no';

export type TDecoration = 'yes' | 'no' | 'i-decorate-myself';

export type TGames = 'yes' | 'no' | 'i-have-at-home';

export interface IEvent {
  step: TStep;
  occasion?: TOccasion;
  guestSize?: TGuestSize;
  form: IForm;
  eInvite?: TEInvite;
  food?: TFood;
  alcohol?: TAlcohol;
  decoration?: TDecoration;
  games?: TGames;
}

export interface ICreatedEvent {
  id: number;
  name: string;
  timestamp: string;
  occasion: TOccasion;
  todos: { title: string; isDone: boolean }[];
}

export interface IEvents {
  events: ICreatedEvent[];
}
