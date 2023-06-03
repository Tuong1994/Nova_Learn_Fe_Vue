import { GetterTree } from "vuex";
import { ValidateState } from "./type";
import { RootState } from "@/store/root";
import { FieldValue } from "@/common/interface/base";

const getters: GetterTree<ValidateState, RootState> = {
  getValidate(state): boolean {
    return state.inValid;
  },
  getError(state): FieldValue {
    return state.error;
  },
};

export default getters;
