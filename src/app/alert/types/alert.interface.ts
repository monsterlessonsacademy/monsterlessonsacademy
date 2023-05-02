import { AlertTypeEnum } from './alertType.enum';

export interface AlertInterface {
  type: AlertTypeEnum;
  text: string;
}
