export type TInput = 'eventName' | 'date' | 'time' | 'budget';

export type Ti18nKey = 'event-name' | 'date' | 'time' | 'budget';

export interface IInput {
  id: TInput;
  i18nKey: Ti18nKey;
  placeholder?: string;
  hasIcon?: boolean;
  type?: 'text' | 'number';
}
