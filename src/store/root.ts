import { ValidateState } from "./modules/validate/type";
import { LangState } from "./modules/lang/type";

export interface RootState {
  validate: ValidateState;
  lang: LangState;
}
