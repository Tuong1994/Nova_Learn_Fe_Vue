import { ValidateState } from "./modules/validate/type";
import { LangState } from "./modules/lang/type";
import { AlertState } from "./modules/alert/type";

export interface RootState {
  validate: ValidateState;
  lang: LangState;
  alert: AlertState;
}
