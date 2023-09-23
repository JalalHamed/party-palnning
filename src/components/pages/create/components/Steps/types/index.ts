export interface IColors {
  anniversary: string;
  birthday: string;
  dinner: string;
  'meet-up': string;
  other: string;
  small: string;
  medium: string;
  large: string;
}

export interface IFormInput {
  id: string;
  i18nKey: string;
  placeholder?: string;
  hasIcon?: boolean;
  type?: 'text' | 'number';
}
