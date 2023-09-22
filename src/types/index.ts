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
    texture: {
      main: string;
      grey: string;
    };
  }
}

export type TTheme = 'dark' | 'light';

export type TOccasion =
  | 'Anniversary'
  | 'Birthday'
  | 'Dinner'
  | 'MeetUp'
  | 'Other';

export interface IHistory {
  title: string;
  date: Date;
}
