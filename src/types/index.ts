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
  }
}

export type TTheme = 'dark' | 'light';

export type TOccasion =
  | 'anniversary'
  | 'birthday'
  | 'dinner'
  | 'meetUp'
  | 'other';

export interface IHistory {
  title: string;
  date: Date;
}

export interface IEvent {
  occasion?: TOccasion;
}

export interface IOptionCardProps {
  id: string;
  active: string;
}
